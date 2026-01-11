// src/routes/token.routes.js

const express = require("express");
const { agoraTokenServerUrl } = require("../config/agoraConfig");

const router = express.Router();

// GET /api/token/server
router.get("/server", (req, res) => {
  if (!agoraTokenServerUrl) {
    return res.status(404).json({ error: "Agora token server URL not set" });
  }
  res.json({ url: agoraTokenServerUrl });
});

module.exports = router;