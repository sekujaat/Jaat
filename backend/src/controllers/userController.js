// src/controllers/userController.js

const UserModel = require("../models/User.model");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

async function listUsers(req, res) {
  try {
    const users = await UserModel.listUsers();
    return res.json({ users });
  } catch (err) {
    console.error("user.listUsers error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function getUser(req, res) {
  try {
    const { id } = req.params;
    const user = await UserModel.findUserById(id);

    if (!user) {
      return sendError(res, 404, "User not found");
    }

    return res.json({ user });
  } catch (err) {
    console.error("user.getUser error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const user = await UserModel.updateUser(id, { username });
    if (!user) {
      return sendError(res, 404, "User not found");
    }

    return res.json({ user });
  } catch (err) {
    console.error("user.updateUser error", err);
    return sendError(res, 500, "Internal server error");
  }
}

module.exports = {
  listUsers,
  getUser,
  updateUser,
};