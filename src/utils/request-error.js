export class RequestError extends Error {
    constructor(message, data, operationId) {
      super(message);
      this.name = "RequestError";
      this.data = data;
      this.messageKey = message;
      this.operationId = operationId;
    }
  }
  