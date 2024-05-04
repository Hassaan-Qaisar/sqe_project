const authMiddleware = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");

describe("Auth Middleware", () => {
  // Mock request and response objects
  const req = {};
  const res = {};
  const next = jest.fn();

  // Mock token
  const token = "mockToken";

  // Mock user data
  const userData = {
    _id: "userId",
    name: "Test User",
    email: "test@example.com",
    avatar: {
      public_id: "avatar_id",
      url: "avatar_url",
    },
    role: "user",
  };

  // Mock jwt.verify to return decoded user data
  jwt.verify = jest.fn().mockReturnValue({ id: userData._id });

  // Mock User.findById to return user data
  User.findById = jest.fn().mockResolvedValue(userData);

  beforeEach(() => {
    // Clear the mock function calls before each test
    jest.clearAllMocks();
  });

  test("Should call next() if token is present and user is found", async () => {
    req.cookies = { token };

    await authMiddleware.isAuthenticated(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith(token, process.env.JWT_SECRET_KEY);
    expect(User.findById).toHaveBeenCalledWith(userData._id);
    expect(req.user).toEqual(userData);
    expect(next).toHaveBeenCalled();
  });

  test("Should call next() with error if token is missing", async () => {
    req.cookies = {};

    await authMiddleware.isAuthenticated(req, res, next);

    expect(next).toHaveBeenCalledWith(
      new ErrorHandler("Please login to continue", 401)
    );
  });
});
