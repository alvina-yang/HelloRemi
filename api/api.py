from flask import Flask, jsonify, request
import requests
import cohere
import os
from dotenv import load_dotenv
from TTS.api import TTS
import json
import subprocess

load_dotenv()

app = Flask(__name__)

# Kintone API credentials and endpoint
KINTONE_API_URL = os.getenv('KINTONE_API_URL')
KINTONE_API_TOKEN = os.getenv('KINTONE_API_TOKEN')
KINTONE_APP_ID = int(os.getenv('KINTONE_APP_ID'))  # Convert to int
co = cohere.Client(os.getenv('COHERE_KEY'))
# tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2", gpu=False)
tts = None
with open('prompt_instruction.json', 'r') as file:
    prompt_data = json.load(file)


prompt_data = {
    "PROMPT_INSTRUCTIONS": """I am trying to help my [Relationship: {}] with reminiscence therapy. I want to tell him/her the story of memory with me. The following are some context you can reference, you do not need to focus on all the context, only use the useful ones:
    Name: {},
    Date of birth: {},
    Hobbies And Interests: {},
    Memorable quotes: {},
    Family Background: {},
    Major Event: {},
    Additional Information: {},
    Recent Chat History: {}
    """,
    "SAMPLE_INPUT": prompt_data["SAMPLE_INPUT"],
    "SAMPLE_OUTPUT": prompt_data["SAMPLE_OUTPUT"],
    "RRETURN_FORMAT": """
        {
            "story": ""
        }
    """
}
# Function to interact with Kintone API
def kintone_request(method, app_id, record_id, payload=None):
    headers = {
        'X-Cybozu-API-Token': KINTONE_API_TOKEN,  # Use this for API token authentication
    }

    url = KINTONE_API_URL+ f'?app={app_id}&id={record_id}'
    if method == 'GET':
        response = requests.get(url, headers=headers)
    elif method == 'POST':
        response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        return response.json()
    else:
        error_message = f'Kintone API Error: {response.status_code}'
        try:
            error_content = response.json()
            error_message += f'\nError Content: {error_content}'
        except:
            error_content = response.text
            error_message += f'\nError Content: {error_content}'

        # Log the error for debugging
        print(error_message)

        return {'error': error_message}



@app.route('/')
def hello_world():
    return 'Hello, World!'


# Route to create a person object
@app.route('/api/create_person', methods=['POST'])
def create_person_handler():
    print("mentor is here")
    print(request.get_json())
    data = request.get_json()

    # Example payload structure, update it based on your Kintone app structure
    payload = {
        'app': KINTONE_APP_ID,  # Replace with your Kintone app ID
        'record': {
            'Prompt': {'prompt': data['prompt']},
            'Username': {'value': data['username']},
            'Password': {'value': data['password']},
            'Name': {'name':data['name']},
            'Age': {'value': data['age']},
            'DateOfBirth': {'value': data['dob']},
            'FamilyBackground': {'value': data['family_background']},
            'HobbiesAndInterests': {'value': data['hobbies_and_interests']},
            'MemorableQuotes': {'value': data['memorable_quotes']},
            'HealthAndWellness': {'value': data['health_and_wellness']},
            'Relationship': {'value': data['relationship']},
            'MemorableEvent': {'value': data['memorable_event']},
            'AdditionalInformation': {'value': data['additional_information']},
            'Tone': {'tone':data['tone']}
        }
    }

    response = kintone_request('GET', app_id=2, record_id=9, payload=payload)
    print(response)
    return jsonify(response)
    # return None



# curl -X GET 'https://remi-domain.kintone.com/k/v1/record.json' \
#   -H 'X-Cybozu-API-Token: dJuQZVLgE5OuZImBFZiN4e1pEPmVXqQZQEFI8X7U' \
#   -H 'Content-Type: application/json' \
#   -d '{"app": 2, "id": 9}'

# get - https://remi-domain.kintone.com/k/v1/record.json
# header: {X-Cybozu-API-Token: dJuQZVLgE5OuZImBFZiN4e1pEPmVXqQZQEFI8X7U, Content-Type: application/json}
# payload: {"app": 2, "id": 9}



# Route to read a person object
@app.route('/api/persons/<string:name>', methods=['GET'])
def get_person(name):
    # Assuming 'Name' is a unique field, you might need to adjust this based on your Kintone app
    query = f"Name='{name}'"
    response = kintone_request('GET', record_id=query)

    if 'records' in response:
        return jsonify(response['records'][0])
    else:
        return jsonify({'message': 'Person not found'}), 404

@app.route('/', methods=['GET'])
def print_hello():
    return 'Hello world!'

# Route to delete a person object
@app.route('/api/persons/<string:name>', methods=['DELETE'])
def delete_person(name):
    query = f"Name='{name}'"
    response = kintone_request('GET', record_id=query)

    if 'records' in response:
        record_id = response['records'][0]['$id']['value']
        response = kintone_request('DELETE', record_id=record_id)
        return jsonify(response)
    else:
        return jsonify({'message': 'Person not found'}), 404

def getStory(person_id):
# Fetch the person's data from the Kintone database using person_id
    response = kintone_request('GET', record_id=person_id)

    try:
        person_data = response['records'][0]
        # Your analyze logic goes here
        # You may want to return some result based on the analysis

        # Imcomplete example using Cohere API
        response = co.chat(
            # chat_history=[
            #     {"role": "USER", "message": "Who discovered gravity?"},
            #     {"role": "CHATBOT", "message": "The man who is widely credited with discovering gravity is Sir Isaac Newton"}
            # ],
            message=prompt_data,
            # perform web search before answering the question. You can also use your own custom connector.
            # connectors=[{"id": "web-search"}]
            )
        return response
    except:
        return 'The person does not exist, please register first.'

# Route to analyze data based on Arduino signals
@app.route('/api/analyze/<int:person_id>', methods=['POST'])
def analyze_person(person_id):
    response_story = getStory(person_id)
    # generate speech by cloning a voice using default settings
    tts.tts_to_file(text=response_story,
        file_path="output.wav",
        speaker_wav="/content/3t8ybkh2ly76swgnqlm6eiqg9fabnuu.wav",
        language="en")

if __name__ == '__main__':
    app.run(debug=True)
