/**
 * High-level flow: signup -> login -> random call token.
 * These are integration-style tests hitting mocked APIs.
 */

import { signup, login } from "@src/services/auth/authservice";
import { startRandomCall } from "@src/services/videoCall/videoCallService";

jest.mock("@src/services/videoCall/videoCallService");

describe("Signup to first random call", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("allows a new user to sign up, log in, and start a random call", async () => {
    const userPayload = {
      email: "test@example.com",
      password: "secret123",
      username: "testuser",
    };

    // Mock signup + login responses to avoid real network
    jest.spyOn(require("@src/services/auth/authservice"), "signup").mockResolvedValue({
      id: "user-1",
      email: userPayload.email,
      username: userPayload.username,
    });

    jest.spyOn(require("@src/services/auth/authservice"), "login").mockResolvedValue({
      id: "user-1",
      email: userPayload.email,
      username: userPayload.username,
    });

    startRandomCall.mockResolvedValue({
      channelName: "Synce",
      token: "fake-token",
      uid: 1,
      partnerId: null,
    });

    const user = await signup(userPayload);
    expect(user.email).toBe(userPayload.email);

    const loggedIn = await login(userPayload.email, userPayload.password);
    expect(loggedIn.id).toBe("user-1");

    const call = await startRandomCall(loggedIn.id);
    expect(call.token).toBeDefined();
    expect(call.channelName).toBe("Synce");
  });
});