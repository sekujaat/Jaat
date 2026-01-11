// src/controllers/authController.js

const UserModel = require("../models/User.model");
const { hashPassword, comparePassword } = require("../utils/passwordHash");
const { validateRegisterInput } = require("../utils/validators");

function sendError(res, status, message, extra = {}) {
  return res.status(status).json({ error: message, ...extra });
}

// POST /api/auth/register
async function register(req, res) {
  try {
    const { email, password, username } = req.body;

    const { valid, errors } = validateRegisterInput({ email, password });
    if (!valid) {
      return sendError(res, 400, "Validation failed", { errors });
    }

    const existing = await UserModel.findUserByEmail(email);
    if (existing) {
      return sendError(res, 409, "User already exists");
    }

    const passwordHash = await hashPassword(password);

    const user = await UserModel.createUser({
      email,
      passwordHash,
      username,
    });

    return res.status(201).json({ user });
  } catch (err) {
    console.error("auth.register error", err);
    return sendError(res, 500, "Internal server error");
  }
}

// POST /api/auth/login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendError(res, 400, "Email and password are required");
    }

    const user = await UserModel.findUserByEmail(email);
    if (!user) {
      return sendError(res, 401, "Invalid credentials");
    }

    const match = await comparePassword(password, user.password_hash);
    if (!match) {
      return sendError(res, 401, "Invalid credentials");
    }

    // TODO: yahan future me JWT add kar sakte ho generateToken.js se
    return res.json({
      user: { id: user.id, email: user.email, username: user.username },
      message: "Login successful",
    });
  } catch (err) {
    console.error("auth.login error", err);
    return sendError(res, 500, "Internal server error");
  }
}

// GET /api/auth/me (placeholder)
async function me(req, res) {
  return res.json({ message: "Add auth middleware & JWT later" });
}

module.exports = {
  register,
  login,
  me,
};