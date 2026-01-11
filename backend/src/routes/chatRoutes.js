// src/routes/chatRoutes.js

const express = require("express");
const chatController = require("../controllers/chatController");

const router = express.Router();

// GET /api/chats/:channel/messages
router.get("/:channel/messages", chatController.listMessages);

// POST /api/chats/:channel/messages
router.post("/:channel/messages", chatController.sendMessage);

module.exports = router;