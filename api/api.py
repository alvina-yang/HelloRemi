from flask import Flask, jsonify, request
import requests
import cohere
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Kintone API credentials and endpoint
KINTONE_API_URL = os.getenv('KINTONE_API_URL')
KINTONE_API_TOKEN = os.getenv('KINTONE_API_TOKEN')
KINTONE_APP_ID = int(os.getenv('KINTONE_APP_ID'))  # Convert to int
co = cohere.Client(os.getenv('COHERE_KEY'))

# Function to interact with Kintone API
def kintone_request(method, payload=None, record_id=None):
    headers = {
        'Content-Type': 'application/json',
        'X-Cybozu-API-Token': KINTONE_API_TOKEN,
    }

    url = KINTONE_API_URL
    if record_id:
        url += f'?ids={record_id}'

    response = requests.request(method, url, headers=headers, json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        return {'error': f'Kintone API Error: {response.status_code}'}

# Route to create a person object
@app.route('/api/persons', methods=['POST'])
def create_person():
    data = request.json

    # Example payload structure, update it based on your Kintone app structure
    payload = {
        'app': 'KINTONE_APP_ID',  # Replace with your Kintone app ID
        'record': {
            'Prompt': {'prompt': data['prompt']},
        }
    }

    response = kintone_request('POST', payload)
    return jsonify(response)

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

# Route to analyze data based on Arduino signals
@app.route('/api/analyze/<int:person_id>', methods=['POST'])
def analyze_person(person_id):
    # Your logic to analyze data based on Arduino signals goes here
    # You can fetch the person's data from the Kintone database using person_id
    response = kintone_request('GET', record_id=person_id)

    if 'records' in response:
        person_data = response['records'][0]
        # Your analyze logic goes here
        # You may want to return some result based on the analysis

        # Imcomplete example using Cohere API
        response = co.chat(
            chat_history=[
                {"role": "USER", "message": "Who discovered gravity?"},
                {"role": "CHATBOT", "message": "The man who is widely credited with discovering gravity is Sir Isaac Newton"}
            ],
            message="What year was he born?",
            # perform web search before answering the question. You can also use your own custom connector.
            connectors=[{"id": "web-search"}]
            )
        return jsonify({'message': 'Analysis completed'})
    else:
        return jsonify({'message': 'Person not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
