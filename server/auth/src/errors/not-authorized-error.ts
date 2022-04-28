import { CustomError } from "./custom-error";

export class NotAUthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not Authorized");
    Object.setPrototypeOf(this, NotAUthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not Authorized" }];
  }
}
