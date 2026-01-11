import { login, signup, logout } from "@src/services/auth/authservice";
import { secureStorage } from "@src/services/storage/secureStorage";

jest.mock("@src/services/storage/secureStorage");

describe("authservice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets token on login", async () => {
    secureStorage.set = jest.fn();

    jest
      .spyOn(require("@src/services/auth/authservice"), "login")
      .mockResolvedValue({
        id: "user-1",
        email: "a@b.com",
        username: "test",
      });

    await login("a@b.com", "password");
    expect(secureStorage.set).toHaveBeenCalled();
  });

  it("removes token on logout", async () => {
    secureStorage.remove = jest.fn();

    await logout();
    expect(secureStorage.remove).toHaveBeenCalledWith("auth_token");
  });

  it("signs up a user", async () => {
    jest
      .spyOn(require("@src/services/auth/authservice"), "signup")
      .mockResolvedValue({
        id: "user-2",
        email: "new@user.com",
        username: "newuser",
      });

    const user = await signup({
      email: "new@user.com",
      password: "secret123",
      username: "newuser",
    });

    expect(user.email).toBe("new@user.com");
  });
});