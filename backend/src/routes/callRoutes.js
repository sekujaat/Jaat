// src/routes/callRoutes.js

const express = require("express");
const callController = require("../controllers/callController");

const router = express.Router();

// GET /api/call/token?channel=xxx&uid=123
router.get("/token", callController.getCallToken);

module.exports = router;