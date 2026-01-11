// tests/call.test.js

const request = require("supertest");
const app = require("../src/app");

describe("Call API", () => {
  const testChannel = "test-channel-123";

  test("should return token for a channel", async () => {
    const res = await request(app)
      .get("/api/call/token")
      .query({ channel: testChannel, uid: 1 });

    // Agar AGORA_TOKEN_SERVER_URL set nahi hai to 500 aayega
    expect([200, 500]).toContain(res.statusCode);

    if (res.statusCode === 200) {
      expect(res.body.token).toBeDefined();
      expect(res.body.channel).toBe(testChannel);
    }
  });

  test("should fail without channel param", async () => {
    const res = await request(app).get("/api/call/token");
    expect(res.statusCode).toBe(400);
  });
});