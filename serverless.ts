import type { AWS } from "@serverless/typescript";

import {
  getAll,
  createTransport,
  getById,
  createReservation,
  deleteReservation,
} from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "transport-poc",
  frameworkVersion: "2",
  plugins: [
    "serverless-webpack",
    "serverless-offline",
    "serverless-dynamodb-local",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-east-2",
    profile: "serverless",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:DescribeTable",
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
            ],
            Resource: "arn:aws:dynamodb:us-east-2:*:table/TransportPoc",
          },
        ],
      },
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: {
    createTransport,
    getAll,
    getById,
    createReservation,
    deleteReservation,
  },
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    dynamodb: {
      start: {
        port: 8000,
        inMemory: true,
        migrate: true,
      },
      stages: "dev",
    },
  },
  resources: {
    Resources: {
      TransportPoc: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "TransportPoc",
          AttributeDefinitions: [
            {
              AttributeName: "transportId",
              AttributeType: "S",
            },
            {
              AttributeName: "time",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "transportId",
              KeyType: "HASH",
            },
            {
              AttributeName: "time",
              KeyType: "RANGE",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
