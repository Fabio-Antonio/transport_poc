import { DocumentClient } from "aws-sdk/clients/dynamodb";
import {
  ICreateData,
  IReservation,
  ITransport,
} from "../interfaces/transport.interfaces";
import { v4 } from "uuid";

export default class TransportService {
  private Tablename: string = "TransportPoc";

  constructor(private docClient: DocumentClient) {}

  async create(todo: ITransport): Promise<ICreateData | string> {
    try {
      const id = v4();
      const createItem: ICreateData = {
        transportId: id,
        date: todo.date,
        time: todo.time,
        delete: false,
        route: "MEX-CUN",
        seats: 22,
        reservations: [],
      };
      await this.docClient
        .put({
          TableName: this.Tablename,
          Item: createItem,
        })
        .promise();
      return createItem;
    } catch (error) {
      return JSON.stringify(error);
    }
  }

  async getAll(): Promise<ICreateData[]> {
    const result = await this.docClient
      .scan({
        TableName: this.Tablename,
      })
      .promise();
    return result.Items as ICreateData[];
  }

  async getById(id: string): Promise<ICreateData> {
    const result = await this.docClient
      .get({
        TableName: this.Tablename,
        Key: {
          transportId: id,
        },
      })
      .promise();
    if (!result.Item) {
      throw new Error("Id does not exit");
    }
    return result.Item as ICreateData;
  }

  async createReservation(id: string): Promise<IReservation | undefined> {
      let getTransport = await this.getById(id);
      if (!getTransport) return;
      const time = getTransport.time;
      const date = new Date(`${getTransport.date}T${time}`);
      const now = new Date();

      if (
        now > date ||
        !(getTransport.seats > 0) ||
        Math.round((date.getTime() - now.getTime()) / 60000) < 30
      )
        return;
      const reservationId = v4();
      const addReservation: IReservation[] = [];
      if (!getTransport.reservations.length) {
        addReservation.push({
          reservationId,
          delete: false,
        });
        getTransport.reservations = addReservation;
      } else {
        getTransport.reservations.push({
          reservationId,
          delete: false,
        });
      }

      await this.docClient
        .update({
          TableName: this.Tablename,
          Key: { transportId: id },
          UpdateExpression: "SET reservations = :r, seats = :s",
          ExpressionAttributeValues: {
            ":r": getTransport.reservations,
            ":s": getTransport.seats - 1,
          },
          ReturnValues: "ALL_NEW",
        })
        .promise();
      return {
        reservationId,
        delete: false,
      };
   
  }

  async deleteReservation(
    idTransport: string,
    idReservation: string
  ): Promise<IReservation | undefined> {
    let getTransport = await this.getById(idTransport);
    if (!getTransport) return;

    getTransport.reservations = getTransport.reservations.map((reservation) => {
      if ((reservation.reservationId === idReservation)) {
        return {
          ...reservation,
          delete: true,
        };
      } else {
        return reservation;
      }
    });

    await this.docClient
      .update({
        TableName: this.Tablename,
        Key: { transportId: idTransport },
        UpdateExpression: "SET reservations = :r, seats = :s",
        ExpressionAttributeValues: {
          ":r": getTransport.reservations,
          ":s": getTransport.seats + 1,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();
    return {
      reservationId: idReservation,
      delete: true,
    };
  }
}
