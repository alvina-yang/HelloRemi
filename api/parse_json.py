import json

def parse_response(response_json):
    data = json.loads(response_json)
    parsed_data = {
        'name': data['record']['name']['value'],
        'age': data['record']['age']['value'],
        'dob': data['record']['dob']['value'],
        'family_background': data['record']['family_background']['value'],
        'hobbies_and_interests': data['record']['hobbies_and_interests']['value'],
        'memorable_quotes': data['record']['memorable_quotes']['value'],
        'health_and_wellness': data['record']['health_and_wellness']['value'],
        'relationship': data['record']['relationship']['value'],
        'memorable_event': data['record']['memorable_event']['value'],
        'prompt': data['record']['prompt']['value']
    }
    return parsed_data

if __name__ == "__main__":
    response_json = '''
    {"record":{"tone":{"type":"FILE","value":[]},"family_background":{"type":"MULTI_LINE_TEXT","value":"You have 4 grandkids, 1 son, and 1 daughter"},"$revision":{"type":"__REVISION__","value":"1"},"hobbies_and_interests":{"type":"MULTI_LINE_TEXT","value":"Your daughter was the spelling bee champion when she was eight years old"},"memorable_quotes":{"type":"SINGLE_LINE_TEXT","value":"\"I got one more in me\" "},"Updated_by":{"type":"MODIFIER","value":{"code":"chandlerx101@gmail.com","name":"chandlerx101@gmail.com"}},"additional_information":{"type":"SINGLE_LINE_TEXT","value":""},"Updated_datetime":{"type":"UPDATED_TIME","value":"2024-01-27T18:53:00Z"},"Created_datetime":{"type":"CREATED_TIME","value":"2024-01-27T18:53:00Z"},"dob":{"type":"DATE","value":"2002-08-23"},"Record_number":{"type":"RECORD_NUMBER","value":"9"},"name":{"type":"SINGLE_LINE_TEXT","value":"Bob"},"Created_by":{"type":"CREATOR","value":{"code":"chandlerx101@gmail.com","name":"chandlerx101@gmail.com"}},"relationship":{"type":"SINGLE_LINE_TEXT","value":"Son of the person reading this"},"prompt":{"type":"SINGLE_LINE_TEXT","value":"This is my test prompt bla bla bla bla bla "},"age":{"type":"NUMBER","value":"20"},"health_and_wellness":{"type":"SINGLE_LINE_TEXT","value":"You have dementia"},"memorable_event":{"type":"SINGLE_LINE_TEXT","value":"Winning a pie eating contest "},"$id":{"type":"__ID__","value":"9"}}}
    '''

    parsed_data = parse_response(response_json)
    print(json.dumps(parsed_data, indent=4))
