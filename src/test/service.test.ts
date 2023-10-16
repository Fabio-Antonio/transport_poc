import { DynamoDB } from "aws-sdk";
import TransportService from "../functions/services/transport-service";

const trasportService = new TransportService(new DynamoDB.DocumentClient());

jest.mock("aws-sdk", () => {
  return {
    DynamoDB: {
      // just an object, not a function
      DocumentClient: jest.fn(() => ({
        scan: jest.fn().mockImplementation(() => {
          return {
            promise() {
              return Promise.resolve([]);
            },
          };
        }),
        put: jest.fn().mockImplementation(() => {
          return {
            promise() {
              return Promise.resolve([]);
            },
          };
        }),
        get: jest.fn().mockImplementation(() => {
          return {
            promise() {
              return Promise.resolve([]);
            },
          };
        }),
        update: jest.fn().mockImplementation(() => {
          return {
            promise() {
              return Promise.resolve([]);
            },
          };
        }),
      })),
    },
  };
});

describe("Service DynamoDB Integration test", () => {
  describe("getAll items", () => {
    it("get all items in transport table", async () => {
      //arrange
      const sut = trasportService;
      //act
      await sut.getAll();
      //assert
      expect(DynamoDB.DocumentClient).toHaveBeenCalled();
    });
  });

  describe("create transport items", () => {
    it("create tranport items in transport table", async () => {
      //arrange
      const sut = trasportService;
      //act
      await sut.create({ date: "2023-10-16", time: "22:35:00" });
      //assert
      expect(DynamoDB.DocumentClient).toHaveBeenCalled();
    });
  });

  describe("get one transport item", () => {
    xit("get one transport item transport table", async () => {
      //arrange
      const sut = trasportService;
      //act
      await sut.getById("fakeid");
      //assert
      expect(DynamoDB.DocumentClient).toHaveBeenCalled();
    });
  });

  describe("create reservation", () => {
    xit("create reservation transport table", async () => {
      //arrange
      const sut = trasportService;
      //act
      const result = await sut.createReservation("fakeid");
      //assert
      expect(DynamoDB.DocumentClient).toHaveBeenCalled();
      expect(result).toThrowError('Id does not exit');
    });
  });

  describe("delete reservation", () => {
    xit("delete reservation transport table", async () => {
      //arrange
      const sut = trasportService;
      //act
      const result = await sut.deleteReservation(
        "fakeid",
        "fake reservation id"
      );
      //assert
      expect(DynamoDB.DocumentClient).toHaveBeenCalled();
      expect(result).toThrowError('Id does not exit');
    });
  });
});
