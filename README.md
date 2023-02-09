# Truffle-Health-Interview-Project
This is a Node.js API with 2 endpoints for creating and retrieving user bills.

##Endpoint 1: /v1/createUserBill
This endpoint is used to create a new user bill. The following information is required for creating a bill:

Patient Name
Hospital Name
Date of Service
Bill Amount
Example request:

bash
Copy code
POST /v1/createUserBill

{
  "patientName": "John Doe",
  "hospitalName": "Memorial Hospital",
  "dateOfService": "2022-01-01",
  "billAmount": 1000
}
Example response:

json
Copy code
{
  "message": "Bill created successfully",
  "bill": {
    "patientName": "John Doe",
    "hospitalName": "Memorial Hospital",
    "dateOfService": "2022-01-01",
    "billAmount": 1000
  }
}
##Endpoint 2: /v1/getUserBills
This endpoint is used to retrieve all of the user bills.

Example request:

bash
Copy code
GET /v1/getUserBills
Example response:

json
Copy code
{
  "bills": [
    {
      "patientName": "John Doe",
      "hospitalName": "Memorial Hospital",
      "dateOfService": "2022-01-01",
      "billAmount": 1000
    },
    {
      "patientName": "Jane Doe",
      "hospitalName": "General Hospital",
      "dateOfService": "2022-02-01",
      "billAmount": 2000
    }
  ]
}
##Running the API
Clone the repository to your local machine
Run npm install to install the required dependencies
Run npm start to start the API
The API will be running on http://localhost:3000 by default. You can make requests to the endpoints using a tool like Postman or cURL.