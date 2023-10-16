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

![alt text](https://doc-14-9o-docs.googleusercontent.com/docs/securesc/9peejektnmgp1buhm0j8d3o2c3e12seq/mv6q36q44a587jqgcej1u9n6vdoh067q/1697464350000/10615474359066731347/10615474359066731347/1HeDXWyu_Eox1tjIKO99d-ERiVavva_0E?e=view&ax=AI0foUor7U7aOoIM9ZtGwcIYJhldMw-9mbPAWQMKgCgM8EsTeOpHBToWmZk0eOX6MaFxvY-YnJackLVdgGrGpiMjykoov6njrR_JQt4HRr8oVCdjQdyU6J3fUwhN1VbWU0RHakVw1i58mrCCya12HRXcLq0mE2lLskZUoXR01ajYeoorVrS57M2NYcPOXFzyyFXE-9bqfhWNSzMVfekgBA1DpQGBjZ35g0Zh7mM8jlYk648Q88lozP63Fy8l_v64YN10PO7OUzQOSA_v1Yg4NVA59daYKEDrgr1TWxyhJUwhb6krPKiODTL3I8zcXb93hA2ToNIF9eX8xJb4vn3K7IbebU8oSN4xerbkrSgwG9ycH9t_7oKlStdRI9MfNxncvie_qrapCLgSvfDn1kA5iKsqiXnCjitTm98Cb8bz9FmhjL_CHeuDf7hyQjbnCWaJ21d1rUn1CScSJ165t9tvran4dlM3co4ixbJDLxOmzCx9bfhVQSVV_JFOAlJUl437EaDjHyxd7DNPpqTjEIFLwDUzMNrXJhSBBWqCcqJl7Pt3iaq9spIJfC7k_OTn9QRpUjLwc25FXHJ6LOWhcEn2dRWNXbgzUl6TNpSWzhPxl_gI2P7qseaw0J4GRE0oqKENpVLzJdQTGWSp1HgRcHMhv3e4Swh2eZKN9e6AvYAdxqcWyjMZ5rLRM_3fL8OWvNVHVF0BR4Az8hjJx9P9tnQ5Xa-uBbLh87dZC4AfisHhyjJWXiPx3inGgOwJhqBO-GpzjChTrOHFCO02S5tBed588MF7SiZkqfrdq9iJPbeDm1NYhFSP2LW-V3ZTXDsVCNAPXPSGfRCHGHTwx1JD9MJ-KusQctMrbBl_4SVcmZmt0VL-rOiM3oDcgRh_7FBN6i9rmNM&uuid=248ad816-4f1a-4fc8-95b4-60935b15d50f&authuser=0&nonce=s708nvtufsh90&user=10615474359066731347&hash=kvbbabu6loquhrmt1osl4o1rp0k4rksm)

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
