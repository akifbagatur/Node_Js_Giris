const customError = require("./Error");
const Enum = require("../config/Enum");

class Response {
  constructor() {}

  static successResponse(data, code = 200) {
    return {
      code,
      data,
    };
  }

  static errorResponse(error) {
    if (error instanceof customError) {
      return {
        code: error.code,
        error: {
          message: error.message,
          description: error.description,
        },
      };
    }

    return {
      code: Enum.HTTP_CODES.INT_SERVER_ERROR,
      error: {
        message: "unknown error",
        description: error.message,
      },
    };
  }
}

module.exports = Response;
