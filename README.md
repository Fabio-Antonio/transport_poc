# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `v14.17.3`.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

This template contains a single lambda function triggered by an HTTP request made on the provisioned API Gateway REST API . The request body must be provided as `application/json`.

### DynamoDb Config
- `docker pull amazon/dynamodb-local`

### Locally

- `docker run -p 8000:8000 amazon/dynamo-local   -jar DynamoDBLocal.jar -sharedDb -inMemory`
- `aws dynamodb create-table --cli-input-json file://create-table-transport.json --endpoint-url http://localhost:8000`
- `sls offline --stage local`

Should get Dynamo db tables `aws dynamodb list-tables --endpoint-url http://localhost:8000`

![alt text](https://drive.google.com/uc?export=view&id=1HeDXWyu_Eox1tjIKO99d-ERiVavva_0E)

```
curl --request POST \
  --url http://localhost:3000/local/create \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.2.0' \
  --data '{
	"date":"2023-10-15",
	"time":"23:45:00"
}
'
curl --request GET \
  --url http://localhost:3000/local/get-all \
  --header 'User-Agent: insomnia/8.2.0'

curl --request GET \
  --url http://localhost:3000/local/get-one/7eaf8331-4ccc-4c51-afaf-7627e45bbef5 \
  --header 'User-Agent: insomnia/8.2.0'  

  curl --request PATCH \
  --url http://localhost:3000/local/add-reservation \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.2.0' \
  --data '{
	"transportId":"7eaf8331-4ccc-4c51-afaf-7627e45bbef5"
}'

curl --request DELETE \
  --url http://localhost:3000/local/delete-reservation/7eaf8331-4ccc-4c51-afaf-7627e45bbef5/42c4ff17-b5ae-4d53-9f65-dc3fb5d59b68 \
  --header 'User-Agent: insomnia/8.2.0'
```


### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --request POST \
  --url https://op0xbk46s4.execute-api.us-east-2.amazonaws.com/dev/create \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.2.0' \
  --data '{
	"date":"2023-10-15",
	"time":"23:45:00"
}
'
curl --request GET \
  --url https://op0xbk46s4.execute-api.us-east-2.amazonaws.com/dev/get-all \
  --header 'User-Agent: insomnia/8.2.0'

curl --request GET \
  --url https://op0xbk46s4.execute-api.us-east-2.amazonaws.com/dev/get-one/7eaf8331-4ccc-4c51-afaf-7627e45bbef5 \
  --header 'User-Agent: insomnia/8.2.0'  

  curl --request PATCH \
  --url https://op0xbk46s4.execute-api.us-east-2.amazonaws.com/dev/add-reservation \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.2.0' \
  --data '{
	"transportId":"7eaf8331-4ccc-4c51-afaf-7627e45bbef5"
}'

curl --request DELETE \
  --url https://op0xbk46s4.execute-api.us-east-2.amazonaws.com/dev/delete-reservation/7eaf8331-4ccc-4c51-afaf-7627e45bbef5/42c4ff17-b5ae-4d53-9f65-dc3fb5d59b68 \
  --header 'User-Agent: insomnia/8.2.0'
```

### Run test 
- `npx jest --watchAll`
