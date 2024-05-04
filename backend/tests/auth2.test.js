// Import necessary modules and dependencies
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAdmin } = require("../middleware/auth");
const Shop = require("../model/shop");

// Mock functions
jest.mock("jsonwebtoken");
const nextMock = jest.fn();

describe("Authentication Middleware", () => {
  describe("isSeller Middleware", () => {
    test("Should return error when seller_token is missing", async () => {
      const req = { cookies: {} };
      const res = {};
      const next = jest.fn();

      await isSeller(req, res, next);

      expect(next).toHaveBeenCalledWith(
        new ErrorHandler("Please login to continue", 401)
      );
    });

    test("Should return error when token is invalid", async () => {
      const req = { cookies: { seller_token: "invalid_token" } };
      const res = {};
      const next = jest.fn();

      jwt.verify.mockImplementation(() => {
        throw new Error("Invalid token");
      });

      await isSeller(req, res, next);

      expect(next).toHaveBeenCalledWith(new ErrorHandler("Invalid token", 401));
    });
  });

  describe("isAdmin Middleware", () => {
    test("Should return error when user role is not included in roles array", () => {
      const req = { user: { role: "user" } };
      const res = {};
      const next = jest.fn();

      isAdmin("admin")(req, res, next);

      expect(next).toHaveBeenCalledWith(
        new ErrorHandler("user can not access this resources!", 403)
      );
    });
  });
});
