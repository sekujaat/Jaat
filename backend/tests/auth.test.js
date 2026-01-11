// tests/auth.test.js

const request = require("supertest");
const app = require("../src/app");
const { pool } = require("../src/config/dbConfig");

describe("Auth API", () => {
  const testEmail = "testuser@example.com";
  const testPassword = "password123";

  afterAll(async () => {
    // Cleanup test user and close db
    await pool.query("DELETE FROM users WHERE email = $1", [testEmail]);
    await pool.end();
  });

  test("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: testEmail,
      password: testPassword,
      username: "testuser",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.user).toBeDefined();
    expect(res.body.user.email).toBe(testEmail);
  });

  test("should not allow duplicate registration", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: testEmail,
      password: testPassword,
      username: "again",
    });

    expect(res.statusCode).toBe(409);
  });

  test("should login with correct credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testEmail,
      password: testPassword,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.user).toBeDefined();
    expect(res.body.user.email).toBe(testEmail);
  });

  test("should reject invalid password", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testEmail,
      password: "wrong-password",
    });

    expect(res.statusCode).toBe(401);
  });
});