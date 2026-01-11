// src/controllers/chatController.js

const ChatModel = require("../models/Chat.model");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

async function listMessages(req, res) {
  try {
    const { channel } = req.params;
    const messages = await ChatModel.listMessages(channel);
    return res.json({ messages });
  } catch (err) {
    console.error("chat.listMessages error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function sendMessage(req, res) {
  try {
    const { channel } = req.params;
    const { senderId, content } = req.body;

    if (!senderId || !content) {
      return sendError(res, 400, "senderId and content are required");
    }

    const message = await ChatModel.createMessage({
      channel,
      senderId,
      content,
    });

    return res.status(201).json({ message });
  } catch (err) {
    console.error("chat.sendMessage error", err);
    return sendError(res, 500, "Internal server error");
  }
}

module.exports = {
  listMessages,
  sendMessage,
};