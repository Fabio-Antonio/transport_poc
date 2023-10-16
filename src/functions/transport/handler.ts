import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "../../libs/apiGateway";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda/trigger/api-gateway-proxy";

import { formatJSONResponse } from "../../libs/apiGateway";
import { middyfy } from "../../libs/lambda";

import schema from "./create-transport/schema";
import TransportService from "../services/transport-service";
import { dynamoDBClient } from "../dynamo-client";
import { ITransport } from "@functions/interfaces/transport.interfaces";

const trasportService = new TransportService(dynamoDBClient());

const createTransport: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const result = await trasportService.create(
    (event.body as unknown) as ITransport
  );
  return formatJSONResponse({
    status:201,
    result,
  });
};

export const getAll = middyfy(
  async (): Promise<APIGatewayProxyResult> => {
    const corridas = await trasportService.getAll();
    return formatJSONResponse({
      corridas,
    });
  }
);

export const getById = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id;
    try {
      const corrida = await trasportService.getById(id);
      return formatJSONResponse({
        corrida: corrida.transportId,
        disponibles: corrida.seats,
      });
    } catch (e) {
      return formatJSONResponse({
        status: 500,
        id,
        message: e,
      });
    }
  }
);

export const createReservation = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const { transportId } = (event.body as unknown) as {
        transportId: string;
      };
      console.info(transportId);
      const reservation = await trasportService.createReservation(transportId);
      const response = {
        status: 201,
        message: "reservation created",
        code: reservation.reservationId,
      } || {
        status: 400,
        message: "Invalid reservation",
      };
      return formatJSONResponse({
        response,
      });
    } catch (e) {
      return formatJSONResponse({
        status: 500,
        message: e,
      });
    }
  }
);

export const deleteReservation = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const transportId = event.pathParameters.transportId;
      const reservationId = event.pathParameters.reservationId;

      const reservation = await trasportService.deleteReservation(
        transportId,
        reservationId
      );
      const response = {
        status: 200,
        message: "reservation deleted",
        code: reservation.reservationId,
      } || {
        status: 400,
        message: "Invalid reservation drop",
      };
      return formatJSONResponse({
        response,
      });
    } catch (e) {
      return formatJSONResponse({
        status: 500,
        message: e,
      });
    }
  }
);

export const create = middyfy(createTransport);
