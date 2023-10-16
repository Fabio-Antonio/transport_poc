/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/dynamo-client.ts":
/*!****************************************!*\
  !*** ./src/functions/dynamo-client.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dynamoDBClient: () => (/* binding */ dynamoDBClient)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dynamoDBClient = () => {\n    if (process.env.IS_OFFLINE) {\n        return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient({\n            region: \"local\",\n            endpoint: \"http://127.0.0.1:8000\",\n            credentials: {\n                accessKeyId: 'fakeMyKeyId',\n                secretAccessKey: 'fakeSecretAccessKey',\n            }\n        });\n    }\n    return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2R5bmFtby1jbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYW5zcG9ydC1wb2MvLi9zcmMvZnVuY3Rpb25zL2R5bmFtby1jbGllbnQudHM/M2RkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBV1MgZnJvbSBcImF3cy1zZGtcIjtcbmltcG9ydCB7IERvY3VtZW50Q2xpZW50IH0gZnJvbSBcImF3cy1zZGsvY2xpZW50cy9keW5hbW9kYlwiO1xuXG5leHBvcnQgY29uc3QgZHluYW1vREJDbGllbnQgPSAoKTogRG9jdW1lbnRDbGllbnQgPT4ge1xuXG4gIGlmIChwcm9jZXNzLmVudi5JU19PRkZMSU5FKSB7XG4gICAgcmV0dXJuIG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoe1xuICAgICAgcmVnaW9uOiBcImxvY2FsXCIsXG4gICAgICBlbmRwb2ludDogXCJodHRwOi8vMTI3LjAuMC4xOjgwMDBcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGFjY2Vzc0tleUlkOiAnZmFrZU15S2V5SWQnLFxuICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6ICdmYWtlU2VjcmV0QWNjZXNzS2V5JyxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/dynamo-client.ts\n");

/***/ }),

/***/ "./src/functions/services/transport-service.ts":
/*!*****************************************************!*\
  !*** ./src/functions/services/transport-service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TransportService)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass TransportService {\n    constructor(docClient) {\n        this.docClient = docClient;\n        this.Tablename = \"TransportPoc\";\n    }\n    create(todo) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();\n                const createItem = {\n                    transportId: id,\n                    date: todo.date,\n                    time: todo.time,\n                    delete: false,\n                    route: \"MEX-CUN\",\n                    seats: 22,\n                    reservations: [],\n                };\n                yield this.docClient\n                    .put({\n                    TableName: this.Tablename,\n                    Item: createItem,\n                })\n                    .promise();\n                return createItem;\n            }\n            catch (error) {\n                return JSON.stringify(error);\n            }\n        });\n    }\n    getAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const result = yield this.docClient\n                .scan({\n                TableName: this.Tablename,\n            })\n                .promise();\n            return result.Items;\n        });\n    }\n    getById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const result = yield this.docClient\n                .get({\n                TableName: this.Tablename,\n                Key: {\n                    transportId: id,\n                },\n            })\n                .promise();\n            if (!result.Item) {\n                throw new Error(\"Id does not exit\");\n            }\n            return result.Item;\n        });\n    }\n    createReservation(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                let getTransport = yield this.getById(id);\n                if (!getTransport)\n                    return;\n                const time = getTransport.time;\n                const date = new Date(`${getTransport.date}T${time}`);\n                const now = new Date();\n                if (now > date ||\n                    !(getTransport.seats > 0) ||\n                    Math.round((date.getTime() - now.getTime()) / 60000) < 30)\n                    return;\n                const reservationId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();\n                const addReservation = [];\n                if (!getTransport.reservations.length) {\n                    addReservation.push({\n                        reservationId,\n                        delete: false,\n                    });\n                    getTransport.reservations = addReservation;\n                }\n                else {\n                    getTransport.reservations.push({\n                        reservationId,\n                        delete: false,\n                    });\n                }\n                yield this.docClient\n                    .update({\n                    TableName: this.Tablename,\n                    Key: { transportId: id },\n                    UpdateExpression: \"SET reservations = :r, seats = :s\",\n                    ExpressionAttributeValues: {\n                        \":r\": getTransport.reservations,\n                        \":s\": getTransport.seats - 1,\n                    },\n                    ReturnValues: \"ALL_NEW\",\n                })\n                    .promise();\n                return {\n                    reservationId,\n                    delete: false,\n                };\n            }\n            catch (error) {\n                console.info(error);\n            }\n        });\n    }\n    deleteReservation(idTransport, idReservation) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let getTransport = yield this.getById(idTransport);\n            if (!getTransport)\n                return;\n            getTransport.reservations = getTransport.reservations.map((reservation) => {\n                if ((reservation.reservationId = idReservation)) {\n                    return Object.assign(Object.assign({}, reservation), { delete: true });\n                }\n                else {\n                    reservation;\n                }\n            });\n            yield this.docClient\n                .update({\n                TableName: this.Tablename,\n                Key: { transportId: idTransport },\n                UpdateExpression: \"SET reservations = :r, seats = :s\",\n                ExpressionAttributeValues: {\n                    \":r\": getTransport.reservations,\n                    \":s\": getTransport.seats + 1,\n                },\n                ReturnValues: \"ALL_NEW\",\n            })\n                .promise();\n            return {\n                reservationId: idReservation,\n                delete: true,\n            };\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3NlcnZpY2VzL3RyYW5zcG9ydC1zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBRUE7QUFHQTtBQUFBO0FBRkE7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7O0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNwb3J0LXBvYy8uL3NyYy9mdW5jdGlvbnMvc2VydmljZXMvdHJhbnNwb3J0LXNlcnZpY2UudHM/YjM4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudENsaWVudCB9IGZyb20gXCJhd3Mtc2RrL2NsaWVudHMvZHluYW1vZGJcIjtcbmltcG9ydCB7XG4gIElDcmVhdGVEYXRhLFxuICBJUmVzZXJ2YXRpb24sXG4gIElUcmFuc3BvcnQsXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RyYW5zcG9ydC5pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcG9ydFNlcnZpY2Uge1xuICBwcml2YXRlIFRhYmxlbmFtZTogc3RyaW5nID0gXCJUcmFuc3BvcnRQb2NcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY0NsaWVudDogRG9jdW1lbnRDbGllbnQpIHt9XG5cbiAgYXN5bmMgY3JlYXRlKHRvZG86IElUcmFuc3BvcnQpOiBQcm9taXNlPElDcmVhdGVEYXRhIHwgc3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlkID0gdjQoKTtcbiAgICAgIGNvbnN0IGNyZWF0ZUl0ZW06IElDcmVhdGVEYXRhID0ge1xuICAgICAgICB0cmFuc3BvcnRJZDogaWQsXG4gICAgICAgIGRhdGU6IHRvZG8uZGF0ZSxcbiAgICAgICAgdGltZTogdG9kby50aW1lLFxuICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICByb3V0ZTogXCJNRVgtQ1VOXCIsXG4gICAgICAgIHNlYXRzOiAyMixcbiAgICAgICAgcmVzZXJ2YXRpb25zOiBbXSxcbiAgICAgIH07XG4gICAgICBhd2FpdCB0aGlzLmRvY0NsaWVudFxuICAgICAgICAucHV0KHtcbiAgICAgICAgICBUYWJsZU5hbWU6IHRoaXMuVGFibGVuYW1lLFxuICAgICAgICAgIEl0ZW06IGNyZWF0ZUl0ZW0sXG4gICAgICAgIH0pXG4gICAgICAgIC5wcm9taXNlKCk7XG4gICAgICByZXR1cm4gY3JlYXRlSXRlbTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxJQ3JlYXRlRGF0YVtdPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kb2NDbGllbnRcbiAgICAgIC5zY2FuKHtcbiAgICAgICAgVGFibGVOYW1lOiB0aGlzLlRhYmxlbmFtZSxcbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuICAgIHJldHVybiByZXN1bHQuSXRlbXMgYXMgSUNyZWF0ZURhdGFbXTtcbiAgfVxuXG4gIGFzeW5jIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8SUNyZWF0ZURhdGE+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRvY0NsaWVudFxuICAgICAgLmdldCh7XG4gICAgICAgIFRhYmxlTmFtZTogdGhpcy5UYWJsZW5hbWUsXG4gICAgICAgIEtleToge1xuICAgICAgICAgIHRyYW5zcG9ydElkOiBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuICAgIGlmICghcmVzdWx0Lkl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIklkIGRvZXMgbm90IGV4aXRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuSXRlbSBhcyBJQ3JlYXRlRGF0YTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJlc2VydmF0aW9uKGlkOiBzdHJpbmcpOiBQcm9taXNlPElSZXNlcnZhdGlvbiB8IHVuZGVmaW5lZD4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZ2V0VHJhbnNwb3J0ID0gYXdhaXQgdGhpcy5nZXRCeUlkKGlkKTtcbiAgICBpZiAoIWdldFRyYW5zcG9ydCkgcmV0dXJuO1xuICAgIGNvbnN0IHRpbWUgPSBnZXRUcmFuc3BvcnQudGltZTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7Z2V0VHJhbnNwb3J0LmRhdGV9VCR7dGltZX1gKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKFxuICAgICAgbm93ID4gZGF0ZSB8fFxuICAgICAgIShnZXRUcmFuc3BvcnQuc2VhdHMgPiAwKSB8fFxuICAgICAgTWF0aC5yb3VuZCgoZGF0ZS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKSAvIDYwMDAwKSA8IDMwXG4gICAgKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHJlc2VydmF0aW9uSWQgPSB2NCgpO1xuICAgIGNvbnN0IGFkZFJlc2VydmF0aW9uOiBJUmVzZXJ2YXRpb25bXSA9IFtdO1xuICAgIGlmICghZ2V0VHJhbnNwb3J0LnJlc2VydmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGFkZFJlc2VydmF0aW9uLnB1c2goe1xuICAgICAgICByZXNlcnZhdGlvbklkLFxuICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBnZXRUcmFuc3BvcnQucmVzZXJ2YXRpb25zID0gYWRkUmVzZXJ2YXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFRyYW5zcG9ydC5yZXNlcnZhdGlvbnMucHVzaCh7XG4gICAgICAgIHJlc2VydmF0aW9uSWQsXG4gICAgICAgIGRlbGV0ZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYXdhaXQgdGhpcy5kb2NDbGllbnRcbiAgICAgIC51cGRhdGUoe1xuICAgICAgICBUYWJsZU5hbWU6IHRoaXMuVGFibGVuYW1lLFxuICAgICAgICBLZXk6IHsgdHJhbnNwb3J0SWQ6IGlkIH0sXG4gICAgICAgIFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIHJlc2VydmF0aW9ucyA9IDpyLCBzZWF0cyA9IDpzXCIsXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcbiAgICAgICAgICBcIjpyXCI6IGdldFRyYW5zcG9ydC5yZXNlcnZhdGlvbnMsXG4gICAgICAgICAgXCI6c1wiOiBnZXRUcmFuc3BvcnQuc2VhdHMgLSAxLFxuICAgICAgICB9LFxuICAgICAgICBSZXR1cm5WYWx1ZXM6IFwiQUxMX05FV1wiLFxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2VydmF0aW9uSWQsXG4gICAgICBkZWxldGU6IGZhbHNlLFxuICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcik7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgYXN5bmMgZGVsZXRlUmVzZXJ2YXRpb24oXG4gICAgaWRUcmFuc3BvcnQ6IHN0cmluZyxcbiAgICBpZFJlc2VydmF0aW9uOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxJUmVzZXJ2YXRpb24gfCB1bmRlZmluZWQ+IHtcbiAgICBsZXQgZ2V0VHJhbnNwb3J0ID0gYXdhaXQgdGhpcy5nZXRCeUlkKGlkVHJhbnNwb3J0KTtcbiAgICBpZiAoIWdldFRyYW5zcG9ydCkgcmV0dXJuO1xuXG4gICAgZ2V0VHJhbnNwb3J0LnJlc2VydmF0aW9ucyA9IGdldFRyYW5zcG9ydC5yZXNlcnZhdGlvbnMubWFwKChyZXNlcnZhdGlvbikgPT4ge1xuICAgICAgaWYgKChyZXNlcnZhdGlvbi5yZXNlcnZhdGlvbklkID0gaWRSZXNlcnZhdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yZXNlcnZhdGlvbixcbiAgICAgICAgICBkZWxldGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNlcnZhdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF3YWl0IHRoaXMuZG9jQ2xpZW50XG4gICAgICAudXBkYXRlKHtcbiAgICAgICAgVGFibGVOYW1lOiB0aGlzLlRhYmxlbmFtZSxcbiAgICAgICAgS2V5OiB7IHRyYW5zcG9ydElkOiBpZFRyYW5zcG9ydCB9LFxuICAgICAgICBVcGRhdGVFeHByZXNzaW9uOiBcIlNFVCByZXNlcnZhdGlvbnMgPSA6ciwgc2VhdHMgPSA6c1wiLFxuICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAgICAgXCI6clwiOiBnZXRUcmFuc3BvcnQucmVzZXJ2YXRpb25zLFxuICAgICAgICAgIFwiOnNcIjogZ2V0VHJhbnNwb3J0LnNlYXRzICsgMSxcbiAgICAgICAgfSxcbiAgICAgICAgUmV0dXJuVmFsdWVzOiBcIkFMTF9ORVdcIixcbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuICAgIHJldHVybiB7XG4gICAgICByZXNlcnZhdGlvbklkOiBpZFJlc2VydmF0aW9uLFxuICAgICAgZGVsZXRlOiB0cnVlLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/services/transport-service.ts\n");

/***/ }),

/***/ "./src/functions/transport/handler.ts":
/*!********************************************!*\
  !*** ./src/functions/transport/handler.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   createReservation: () => (/* binding */ createReservation),\n/* harmony export */   deleteReservation: () => (/* binding */ deleteReservation),\n/* harmony export */   getAll: () => (/* binding */ getAll),\n/* harmony export */   getById: () => (/* binding */ getById)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/transport-service */ \"./src/functions/services/transport-service.ts\");\n/* harmony import */ var _dynamo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamo-client */ \"./src/functions/dynamo-client.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst trasportService = new _services_transport_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"]((0,_dynamo_client__WEBPACK_IMPORTED_MODULE_4__.dynamoDBClient)());\nconst createTransport = (event) => __awaiter(void 0, void 0, void 0, function* () {\n    const result = yield trasportService.create(event.body);\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n        status: 201,\n        result,\n    });\n});\nconst getAll = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(() => __awaiter(void 0, void 0, void 0, function* () {\n    const corridas = yield trasportService.getAll();\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n        corridas,\n    });\n}));\nconst getById = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)((event) => __awaiter(void 0, void 0, void 0, function* () {\n    const id = event.pathParameters.id;\n    try {\n        const corrida = yield trasportService.getById(id);\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            corrida: corrida.transportId,\n            disponibles: corrida.seats,\n        });\n    }\n    catch (e) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            status: 500,\n            id,\n            message: e,\n        });\n    }\n}));\nconst createReservation = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)((event) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { transportId } = event.body;\n        console.info(transportId);\n        const reservation = yield trasportService.createReservation(transportId);\n        const response = {\n            status: 201,\n            message: \"reservation created\",\n            code: reservation.reservationId,\n        } || {\n            status: 400,\n            message: \"Invalid reservation\",\n        };\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            response,\n        });\n    }\n    catch (e) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            status: 500,\n            message: e,\n        });\n    }\n}));\nconst deleteReservation = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)((event) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const transportId = event.pathParameters.transportId;\n        const reservationId = event.pathParameters.reservationId;\n        const reservation = yield trasportService.deleteReservation(transportId, reservationId);\n        const response = {\n            status: 200,\n            message: \"reservation deleted\",\n            code: reservation.reservationId,\n        } || {\n            status: 400,\n            message: \"Invalid reservation drop\",\n        };\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            response,\n        });\n    }\n    catch (e) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            status: 500,\n            message: e,\n        });\n    }\n}));\nconst create = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(createTransport);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3RyYW5zcG9ydC9oYW5kbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFuc3BvcnQtcG9jLy4vc3JjL2Z1bmN0aW9ucy90cmFuc3BvcnQvaGFuZGxlci50cz8yMWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xuXG5pbXBvcnQgdHlwZSB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tIFwiLi4vLi4vbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxufSBmcm9tIFwiYXdzLWxhbWJkYS90cmlnZ2VyL2FwaS1nYXRld2F5LXByb3h5XCI7XG5cbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCIuLi8uLi9saWJzL2FwaUdhdGV3YXlcIjtcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tIFwiLi4vLi4vbGlicy9sYW1iZGFcIjtcblxuaW1wb3J0IHNjaGVtYSBmcm9tIFwiLi9jcmVhdGUtdHJhbnNwb3J0L3NjaGVtYVwiO1xuaW1wb3J0IFRyYW5zcG9ydFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3RyYW5zcG9ydC1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBkeW5hbW9EQkNsaWVudCB9IGZyb20gXCIuLi9keW5hbW8tY2xpZW50XCI7XG5pbXBvcnQgeyBJVHJhbnNwb3J0IH0gZnJvbSBcIkBmdW5jdGlvbnMvaW50ZXJmYWNlcy90cmFuc3BvcnQuaW50ZXJmYWNlc1wiO1xuXG5jb25zdCB0cmFzcG9ydFNlcnZpY2UgPSBuZXcgVHJhbnNwb3J0U2VydmljZShkeW5hbW9EQkNsaWVudCgpKTtcblxuY29uc3QgY3JlYXRlVHJhbnNwb3J0OiBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFxuICB0eXBlb2Ygc2NoZW1hXG4+ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyYXNwb3J0U2VydmljZS5jcmVhdGUoXG4gICAgKGV2ZW50LmJvZHkgYXMgdW5rbm93bikgYXMgSVRyYW5zcG9ydFxuICApO1xuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgICBzdGF0dXM6MjAxLFxuICAgIHJlc3VsdCxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsID0gbWlkZHlmeShcbiAgYXN5bmMgKCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4gICAgY29uc3QgY29ycmlkYXMgPSBhd2FpdCB0cmFzcG9ydFNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICBjb3JyaWRhcyxcbiAgICB9KTtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEJ5SWQgPSBtaWRkeWZ5KFxuICBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50KTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBpZCA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzLmlkO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb3JyaWRhID0gYXdhaXQgdHJhc3BvcnRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgIGNvcnJpZGE6IGNvcnJpZGEudHJhbnNwb3J0SWQsXG4gICAgICAgIGRpc3BvbmlibGVzOiBjb3JyaWRhLnNlYXRzLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgICBpZCxcbiAgICAgICAgbWVzc2FnZTogZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlc2VydmF0aW9uID0gbWlkZHlmeShcbiAgYXN5bmMgKGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdHJhbnNwb3J0SWQgfSA9IChldmVudC5ib2R5IGFzIHVua25vd24pIGFzIHtcbiAgICAgICAgdHJhbnNwb3J0SWQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmluZm8odHJhbnNwb3J0SWQpO1xuICAgICAgY29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCB0cmFzcG9ydFNlcnZpY2UuY3JlYXRlUmVzZXJ2YXRpb24odHJhbnNwb3J0SWQpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIHN0YXR1czogMjAxLFxuICAgICAgICBtZXNzYWdlOiBcInJlc2VydmF0aW9uIGNyZWF0ZWRcIixcbiAgICAgICAgY29kZTogcmVzZXJ2YXRpb24ucmVzZXJ2YXRpb25JZCxcbiAgICAgIH0gfHwge1xuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlc2VydmF0aW9uXCIsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgICBtZXNzYWdlOiBlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUmVzZXJ2YXRpb24gPSBtaWRkeWZ5KFxuICBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50KTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdHJhbnNwb3J0SWQgPSBldmVudC5wYXRoUGFyYW1ldGVycy50cmFuc3BvcnRJZDtcbiAgICAgIGNvbnN0IHJlc2VydmF0aW9uSWQgPSBldmVudC5wYXRoUGFyYW1ldGVycy5yZXNlcnZhdGlvbklkO1xuXG4gICAgICBjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHRyYXNwb3J0U2VydmljZS5kZWxldGVSZXNlcnZhdGlvbihcbiAgICAgICAgdHJhbnNwb3J0SWQsXG4gICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIG1lc3NhZ2U6IFwicmVzZXJ2YXRpb24gZGVsZXRlZFwiLFxuICAgICAgICBjb2RlOiByZXNlcnZhdGlvbi5yZXNlcnZhdGlvbklkLFxuICAgICAgfSB8fCB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVzZXJ2YXRpb24gZHJvcFwiLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgICAgICByZXNwb25zZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgICAgbWVzc2FnZTogZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IG1pZGR5ZnkoY3JlYXRlVHJhbnNwb3J0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/transport/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatJSONResponse: () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFuc3BvcnQtcG9jLy4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCJcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gXCJqc29uLXNjaGVtYS10by10c1wiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middyfy: () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNwb3J0LXBvYy8uL3NyYy9saWJzL2xhbWJkYS50cz82YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tIFwiQG1pZGR5L2NvcmVcIlxuaW1wb3J0IG1pZGR5SnNvbkJvZHlQYXJzZXIgZnJvbSBcIkBtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXJcIlxuXG5leHBvcnQgY29uc3QgbWlkZHlmeSA9IChoYW5kbGVyKSA9PiB7XG4gIHJldHVybiBtaWRkeShoYW5kbGVyKS51c2UobWlkZHlKc29uQm9keVBhcnNlcigpKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/transport/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;