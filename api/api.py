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
class Person:
    def __init__(self, name=None, dob=None, hobbies_and_interests=None,
                 memorable_quotes=None, family_background=None, memorable_event=None,
                 relationship=None, additional_information=None, age=None, tone=None, story=None, username=None, password=None, chat_history=None):
        self.username = username
        self.password = password
        self.name = name
        self.age = age
        self.dob = dob
        self.family_background = family_background
        self.hobbies_and_interests = hobbies_and_interests
        self.memorable_quotes = memorable_quotes
        self.relationship = relationship
        self.memorable_event = memorable_event
        self.additional_information = additional_information
        self.tone = tone
        self.story = story
        self.chat_history = chat_history

    def to_dict(self):
        return {
            'Username': self.username,
            'Password': self.password,
            'Name': self.name,
            'Age': self.age,
            'Date of Birth': self.dob,
            'Family Background': self.family_background,
            'Hobbies and Interests': self.hobbies_and_interests,
            'Memorable Quotes': self.memorable_quotes,
            'Relationship': self.relationship,
            'Memorable Event': self.memorable_event,
            'Additional Information': self.additional_information,
            'Tone': self.tone,
            'Story': self.story,
            'Chat History': self.chat_history
        }

# Kintone API credentials and endpoint
KINTONE_API_GET_URL = os.getenv('KINTONE_API_GET_URL')
KINTONE_API_POST_URL = os.getenv('KINTONE_API_POST_URL')
KINTONE_API_TOKEN = os.getenv('KINTONE_API_TOKEN')
KINTONE_APP_ID = int(os.getenv('KINTONE_APP_ID'))  # Convert to int
co = cohere.Client(os.getenv('COHERE_KEY'))
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2", gpu=False)
# tts = None
with open('prompt_instruction.json', 'r') as file:
    prompt_instruction = json.load(file)


prompt_data = {
    "PROMPT_INSTRUCTIONS": """I am trying to help my [Relationship: {}] with reminiscence therapy. I want to tell him/her the story of memory with me.
    here are another group of example you can mimic:

    Here are some example input for u to reference, and you should learn how this person write the output:
    {}
    output:
    {}

    The following are some context of the person u need to write about, you do not need to focus on all the context, only use the useful ones:
    Name: {},
    Date of birth: {},
    Hobbies And Interests: {},
    Memorable quotes: {},
    Family Background: {},
    Major Event: {},
    Additional Information: {},
    Recent Chat History: {}


    You should only give the response and no other unrelated text.
    """,


}
db = {
    "AlexWang": Person(
        username="AlexWang",
        password="123456",
        name="Alex Wang",
        dob="2011-08-23",
        hobbies_and_interests="Play Basketball and Soccer, ski",
        memorable_quotes="\"Never gonna give you up, never gonna let you down\"",
        family_background="My mother is Lucy, my father is Bob, my sister is Alice",
        memorable_event="I won the spelling bee when I was 8 years old",
        relationship="You are my grandfather",
        additional_information="When I was 10, I got into a fight with my sister. My grandfather took me to the beach and taught me how to skip stones. He told me to put all of my anger into the stones, and the number of times the stone skipped would be how much anger I put into my throw. We skipped stones until the sun went down."
    ),
    "emilyli": Person(
        name="Emily Li",
        dob="2001-08-23",
        hobbies_and_interests="Play piano, swim, doing math",
        memorable_quotes="I like hamburger",
        family_background="My mother is AAA, my father is BBB, my daughter is CCC",
        memorable_event="I go to University of Toronto",
        relationship="You are my grandfather",
        additional_information="We went to California for a summer trip together in 2015. You took me to visit the Golden Gate Bridge, and it was very fun. I still remember we swam together, climbed mountains, and you told me to be careful.",
        tone="wav/nahida.wav"
    )
}

# Function to interact with Kintone API
def kintone_request(method, app_id, record_id = None, property=None):
    headers = {
        'X-Cybozu-API-Token': KINTONE_API_TOKEN,  # Use this for API token authentication
    }
    if method == 'GET':
        url = KINTONE_API_GET_URL+ f'?app={app_id}'
        response = requests.get(url, headers=headers)
    elif method == 'POST':
        headers['Content-Type'] = 'application/json'
        url = KINTONE_API_POST_URL
        data = {
            "app": app_id,
            "properties": property
        }
        response = requests.post(url, headers=headers, json=data)
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
    data = request.get_json()
    person = Person(**data)
    db[person.username] = person
    return jsonify(person.to_dict())

#     # Example payload structure, update it based on your Kintone app structure
#     property = {
#         'Username': {
#             'type': 'SINGLE_LINE_TEXT',
#             'value': data['username']
#         },
#         'Password': {
#             'type': 'SINGLE_LINE_TEXT',
#             'value': data['password']
#         },
#         'Name': {
#             'type': 'SINGLE_LINE_TEXT',
#             'name': data['name']
#         },
#         'Age': {
#             'type': 'NUMBER',
#             'value': data['age']
#         },
#         'Date of Birth': {
#             'type': 'DATE',
#             'value': data['dob']
#         },
#         'Family Background': {
#             'type': 'SINGLE_LINE_TEXT',
#             'value': data['family_background']
#         },
#         'Hobbies and Interests': {
#             'type': 'MULTI_LINE_TEXT',
#             'value': data['hobbies_and_interests']
#         },
#         'Memorable Quotes': {
#             'type': 'MULTI_LINE_TEXT',
#             'value': data['memorable_quotes']
#         },
#         'Relationship': {
#             'type': 'DROP_DOWN',
#             'value': data['relationship']
#         },
#         'Memorable Event': {
#             'type': 'SINGLE_LINE_TEXT',
#             'value': data['memorable_event']
#         },
#         'Additional Information': {
#             'type': 'RICH_TEXT',
#             'value': data['additional_information']
#         }
#         # 'Tone': {'tone':data['tone']}
#     }


#     response = kintone_request('POST', app_id=2, property=property)
#     print(response)
#     return jsonify(response)
    # return None

@app.route('/api/additional_info', methods=['POST'])
def additional_info_handler():
    data = request.get_json()
    db[data['username']].additional_information = data['additional_information']
    db[data['username']].story = getStory(data['username'])
    return jsonify(db[data['username']].to_dict())


# curl -X GET 'https://remi-domain.kintone.com/k/v1/record.json' \
#   -H 'X-Cybozu-API-Token: dJuQZVLgE5OuZImBFZiN4e1pEPmVXqQZQEFI8X7U' \
#   -H 'Content-Type: application/json' \
#   -d '{"app": 2, "id": 9}'

# get - https://remi-domain.kintone.com/k/v1/record.json
# header: {X-Cybozu-API-Token: dJuQZVLgE5OuZImBFZiN4e1pEPmVXqQZQEFI8X7U, Content-Type: application/json}
# payload: {"app": 2, "id": 9}



# Route to read a person object
@app.route('/api/persons/<int:id>', methods=['GET'])
def get_person(id):
    # Assuming 'Name' is a unique field, you might need to adjust this based on your Kintone app
    query = f"Name='{id}'"
    response = kintone_request('GET', app_id=2, record_id=id)
    print(response)
    if 'records' in response:
        return jsonify(response['records'])
    else:
        return jsonify({'message': 'Person not found'}), 404

# # Route to delete a person object
# @app.route('/api/persons/<string:name>', methods=['DELETE'])
# def delete_person(name):
#     query = f"Name='{name}'"
#     response = kintone_request('GET', record_id=query)

#     if 'records' in response:
#         record_id = response['records'][0]['$id']['value']
#         response = kintone_request('DELETE', record_id=record_id)
#         return jsonify(response)
#     else:
#         return jsonify({'message': 'Person not found'}), 404

def getStory(person_name):
# Fetch the person's data from the Kintone database using person_id
    # response = kintone_request('GET', app_id=2, record_id=person_id)
    person_data = db[person_name]

    response = co.chat(
        message=prompt_data["PROMPT_INSTRUCTIONS"].format(person_data.relationship, prompt_instruction["SAMPLE_INPUT"], prompt_instruction["SAMPLE_OUTPUT"], person_data.name, person_data.dob, person_data.hobbies_and_interests, person_data.memorable_quotes, person_data.family_background, person_data.memorable_event, person_data.additional_information, person_data.chat_history),
        )
    tts.tts_to_file(text=response.text,
        file_path="output.wav",
        speaker_wav=person_data.tone,
        language="en")
    return response.text


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
