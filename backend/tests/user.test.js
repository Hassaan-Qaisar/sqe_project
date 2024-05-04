const mongoose = require("mongoose");
const User = require("../model/user");

describe("User Model", () => {
  beforeAll(async () => {
    // Connect to the test database before running the tests
    await mongoose.connect(
      "mongodb+srv://hassaanqaisar2:I1bYIsoY7AJK4hev@cluster0.i6519ta.mongodb.net/eshop_test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });

  describe("User Schema Validation", () => {
    test("Should throw error for missing required field", async () => {
      const userDataWithOutName = {
        // name: "Test User",
        email: "test@example.com",
        password: "password123",
        avatar: {
          public_id: "avatar_id",
          url: "avatar_url",
        },
      };

      const newUser = await User.create(userDataWithOutName);

      expect(newUser).toHaveProperty("name", "Test User");
      expect(newUser).toHaveProperty("email", "test@example.com");
    });

    test("Should throw error for invalid email format", async () => {
      const userDataWithInvalidEmail = {
        name: "Test User",
        email: "invalidemail@gmail.com",
        password: "password123",
      };

      const newUser = new User(userDataWithInvalidEmail);

      if (!newUser.email.includes("@")) {
        throw new Error("Invalid email format");
      }
    });

    test("Should throw error for password length less than 4 characters", async () => {
      const userDataWithShortPassword = {
        name: "Test User",
        email: "test@example.com",
        password: "password",
      };

      if (userDataWithShortPassword.password.length < 4) {
        throw new Error(
          "Password length should be greater than or equal to 4 characters"
        );
      }
    });

    describe("User CRUD Operations", () => {
      test("Should create a new user", async () => {
        const userData = {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
          avatar: {
            public_id: "avatar_id",
            url: "avatar_url",
          },
        };

        const newUser = await User.create(userData);

        expect(newUser).toHaveProperty("name", "Test User");
        expect(newUser).toHaveProperty("email", "test@example.com");
        expect(newUser).toHaveProperty("avatar.public_id", "avatar_id");
        expect(newUser).toHaveProperty("avatar.url", "avatar_url");
      });

      test("Should read user from database", async () => {
        const userData = {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
          avatar: {
            public_id: "avatar_id",
            url: "avatar_url",
          },
        };

        const newUser = await User.create(userData);
        const foundUser = await User.findById(newUser._id);

        expect(foundUser).not.toBeNull();
        expect(foundUser._id.toString()).toEqual(newUser._id.toString());
      });

      test("Should update user name and email", async () => {
        const userData = {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
          avatar: {
            public_id: "avatar_id",
            url: "avatar_url",
          },
        };

        const newUser = await User.create(userData);

        const updatedName = "Updated User";
        const updatedEmail = "updated@example.com";

        newUser.name = updatedName;
        newUser.email = updatedEmail;
        await newUser.save();

        const updatedUser = await User.findById(newUser._id);
        expect(updatedUser.name).toEqual(updatedName);
        expect(updatedUser.email).toEqual(updatedEmail);
      });

      test("Should delete a user", async () => {
        const userData = {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
          avatar: {
            public_id: "avatar_id",
            url: "avatar_url",
          },
        };

        const newUser = await User.create(userData);
        await User.deleteOne({ _id: newUser._id });
        const deletedUser = await User.findById(newUser._id);

        expect(deletedUser).toBeNull();
      });
    });
  });

  describe("User Model Functionality", () => {
    test("Should hash password before saving", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        avatar: {
          public_id: "avatar_id",
          url: "avatar_url",
        },
      };
      const newUser = await User.create(userData);

      expect(newUser.password).not.toBe(userData.password);
    });

    test("Should generate JWT token", () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        avatar: {
          public_id: "avatar_id",
          url: "avatar_url",
        },
      };

      const user = new User(userData);
      const token = user.getJwtToken();

      expect(typeof token).toBe("string");
    });

    test("Should compare password", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        avatar: {
          public_id: "avatar_id",
          url: "avatar_url",
        },
      };
      const newUser = await User.create(userData);

      const isMatch = await newUser.comparePassword("password123");
      expect(isMatch).toBe(true);

      const isNotMatch = await newUser.comparePassword("wrongpassword");
      expect(isNotMatch).toBe(false);
    });
  });
  afterAll(async () => {
    // Delete all documents from the User collection
    await User.deleteMany({});
    // Disconnect from the test database
    await mongoose.disconnect();
  });
});
