import { login, signup, logout, getStoredToken } from "@src/services/auth/authservice";
import { secureStorage } from "@src/services/storage/secureStorage";

jest.mock("@src/services/storage/secureStorage");

describe("Auth flow", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("stores token on login and clears it on logout", async () => {
    secureStorage.set = jest.fn();
    secureStorage.get = jest.fn().mockResolvedValue("fake-token");
    secureStorage.remove = jest.fn();

    jest.spyOn(require("@src/services/auth/authservice"), "login").mockResolvedValue({
      id: "user-1",
      email: "a@b.com",
      username: "test",
    });

    await login("a@b.com", "password");
    expect(secureStorage.set).toHaveBeenCalledWith("auth_token", expect.any(String));

    const token = await getStoredToken();
    expect(token).toBe("fake-token");

    await logout();
    expect(secureStorage.remove).toHaveBeenCalledWith("auth_token");
  });

  it("signs up new user", async () => {
    jest.spyOn(require("@src/services/auth/authservice"), "signup").mockResolvedValue({
      id: "user-2",
      email: "new@user.com",
      username: "newuser",
    });

    const user = await signup({
      email: "new@user.com",
      password: "secret123",
      username: "newuser",
    });

    expect(user.id).toBe("user-2");
  });
});