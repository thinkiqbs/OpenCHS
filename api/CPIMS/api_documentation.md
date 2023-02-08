
# CPIMS - Helpline 116 Integration

###### Document date: 26th August 2019

###### Version: 1.0.0

###### Base URL : https://test.cpims.net/api/v1/

###### Authentication: Token





### Re-usable configuration parameters

Endpoint: /settings/
Method: GET
Parameters: field_name

#### Sample Test with Curl

curl -i https://test.cpims.net/api/v1/settings/?field_name=case_category_id -H 'Authorization: Token XYZ'


#### Sample Test with Requests

import requests

url = 'https://test.cpims.net/api/v1/settings/'
headers = {'Authorization': 'Token XYZ'}

params = {"field_name": "case_category_id"}
response = requests.get(url, params=params, headers=headers)

print (response)
print (response.headers)
print (response.content)


Geo Links

Endpoint: /geo/
Method: GET
Parameters: None

Sample Test with Curl

curl -i https://test.cpims.net/api/v1/geo/ -H 'Authorization: Token XYZ'

Sample Test with Requests

import requests

url = 'https://test.cpims.net/api/v1/geo/'
headers = {'Authorization': 'Token XYZ'}

response = requests.get(url, params={}, headers=headers)

print (response)
print (response.headers)
print (response.content)

New Case Record

Endpoint: /crs/
Method: POST
Parameters: case_id, perpetrator_names, case_category, child_names, child_dob, perpetrator_relationship, county, constituency, case_landmark, case_details, child_sex, account, longitude, latitude, reporter_names, reporter_telephone

Sample Test with Curl

```json
{"county": "001", "constituency": "001", "case_category": "CDIS",
  "child_dob": "2010-06-15", "perpetrator_names": "Moses Onyango",
  "child_names": "Susan Atieno", "perpetrator_relationship": "RCPT",
  "case_landmark": "Near kiroboto primary",
  "case_details": "Child was abducted", "child_sex": "SMAL"}
```

Save this as data.json

curl -d "@data.json" -X POST https://test.cpims.net/api/v1/crs/ -H 'Authorization: Token XYZ'


Sample Test with Requests

import requests

url = 'https://test.cpims.net/api/v1/crs/'
headers = {'Authorization': 'XYZ'}


data =
```json
{"county": "001", "constituency": "001", "case_category": "CDIS",
        "child_dob": "2010-06-15", "perpetrator_names": "Moses Onyango",
        "child_names": "Susan Atieno", "perpetrator_relationship": "RCPT",
        "case_landmark": "Near kiroboto primary",
        "case_details": "Child was abducted", "child_sex": "SMAL"}

```

response = requests.post(url, json=data, headers=headers)

print (response)
print (response.headers)
print (response.content)



Query Case Record

Endpoint: /crs/
Method: GET
Parameters: case_id, case_serial

Sample Test with Curl

curl -i https://test.cpims.net/api/v1/crs/?case_id= f6e09348-c5d2-11e9-9018-d4258b5a3abb -H 'Authorization: Token XYZ'


Sample Test with Requests

import requests

url = 'https://test.cpims.net/api/v1/crs/'
headers = {'Authorization': 'Token XYZ'}

case_id = 'f6e09348-c5d2-11e9-9018-d4258b5a3abb'
response = requests.get(url, params={"case_id": case_id}, headers=headers)

print (response)
print (response.headers)
print (response.content)
