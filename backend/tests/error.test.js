// Import necessary modules and dependencies
const ErrorHandler = require("../utils/ErrorHandler");
const errorMiddleware = require("../middleware/error");

// Mock functions
const mockError = new Error("Test error");

describe("Error Middleware", () => {
  test("Should handle CastError correctly", () => {
    const err = {
      name: "CastError",
      path: "testField",
    };
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    errorMiddleware(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: `Resources not found with this id.. Invalid ${err.path}`,
    });
  });

  test("Should handle Duplicate key error correctly", () => {
    const err = {
      code: 11000,
      keyValue: { testField: "duplicate_value" },
    };
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    errorMiddleware(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: `Duplicate key testField Entered`,
    });
  });

  test("Should handle unknown errors correctly", () => {
    const err = new Error("Test error");
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    errorMiddleware(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Test error",
    });
  });

  test("Should handle JsonWebTokenError correctly", () => {
    const err = new Error("Invalid token");
    err.name = "JsonWebTokenError";
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    errorMiddleware(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Your url is invalid please try again letter",
    });
  });

  test("Should handle TokenExpiredError correctly", () => {
    const err = new Error("Token expired");
    err.name = "TokenExpiredError";
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    errorMiddleware(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Your Url is expired please try again letter!",
    });
  });
});
