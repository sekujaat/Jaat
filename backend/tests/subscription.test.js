// tests/subscription.test.js

const request = require("supertest");
const app = require("../src/app");
const { pool } = require("../src/config/dbConfig");

describe("Subscription API", () => {
  let userId;

  beforeAll(async () => {
    const result = await pool.query(
      "INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id",
      ["subtest@example.com", "dummyhash"]
    );
    userId = result.rows[0].id;
  });

  afterAll(async () => {
    await pool.query("DELETE FROM subscriptions WHERE user_id = $1", [userId]);
    await pool.query("DELETE FROM users WHERE id = $1", [userId]);
    await pool.end();
  });

  test("should create subscription", async () => {
    const res = await request(app).post("/api/subscriptions").send({
      userId,
      plan: "premium_monthly",
      status: "active",
      validUntil: null,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.subscription).toBeDefined();
    expect(res.body.subscription.user_id).toBe(userId);
  });

  test("should fetch latest subscription", async () => {
    const res = await request(app).get(`/api/subscriptions/${userId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.subscription).toBeDefined();
    expect(res.body.subscription.user_id).toBe(userId);
  });
});