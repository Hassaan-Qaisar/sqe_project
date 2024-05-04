const sendToken = require("../utils/jwtToken");
const User = require("../model/user");
const sendShopToken = require("../utils/shopToken");
const Shop = require("../model/shop");
const nodemailer = require("nodemailer");
const sendMail = require("../utils/sendMail");

// Mock user object
const mockUser = {
  getJwtToken: jest.fn().mockReturnValue("mockToken"),
};

// Mock shop object
const mockShop = {
  getJwtToken: jest.fn().mockReturnValue("mockToken"),
};

// Mock nodemailer.createTransport function
jest.mock("nodemailer", () => ({
  createTransport: jest.fn(),
}));

// Mock response object
const mockRes = {
  status: jest.fn().mockReturnThis(),
  cookie: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("sendToken function", () => {
  test("Should send token in response cookies", () => {
    // Call the function with mocked parameters
    sendToken(mockUser, 200, mockRes);

    // Verify that the status method was called with 200
    expect(mockRes.status).toHaveBeenCalledWith(200);

    // Verify that the cookie method was called with the correct parameters
    expect(mockRes.cookie).toHaveBeenCalledWith("token", "mockToken", {
      expires: expect.any(Date),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    // Verify that the json method was called with the correct response body
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      user: mockUser,
      token: "mockToken",
    });
  });
});

describe("sendShopToken function", () => {
  test("Should send token in response cookies", () => {
    // Call the function with mocked parameters
    sendShopToken(mockShop, 200, mockRes);

    // Verify that the status method was called with 200
    expect(mockRes.status).toHaveBeenCalledWith(200);

    // Verify that the cookie method was called with the correct parameters
    expect(mockRes.cookie).toHaveBeenCalledWith("seller_token", "mockToken", {
      expires: expect.any(Date),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    // Verify that the json method was called with the correct response body
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      user: mockShop,
      token: "mockToken",
    });
  });
});

describe("sendMail function", () => {
  test("Should send email successfully", async () => {
    // Mocked options
    const options = {
      email: "test@example.com",
      subject: "Test Subject",
      message: "Test Message",
    };

    // Mock transporter and sendMail function
    const mockSendMail = jest.fn().mockResolvedValue();
    nodemailer.createTransport.mockReturnValue({ sendMail: mockSendMail });

    // Call the sendMail function
    await sendMail(options);

    // Verify that nodemailer.createTransport was called with the correct parameters
    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    // Verify that sendMail method was called with the correct parameters
    expect(mockSendMail).toHaveBeenCalledWith({
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    });
  });
});
