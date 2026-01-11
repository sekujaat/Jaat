// src/controllers/callController.js

const axios = require("axios");
const { agoraTokenServerUrl } = require("../config/agoraConfig");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

// GET /api/call/token?channel=xxx&uid=123
async function getCallToken(req, res) {
  try {
    const channel = req.query.channel;
    const uid = req.query.uid || 0;

    if (!agoraTokenServerUrl) {
      return sendError(res, 500, "Agora token server URL not configured");
    }

    if (!channel) {
      return sendError(res, 400, "channel query param is required");
    }

    const url = `${agoraTokenServerUrl.replace(
      //$/,
      ""
    )}/rtcToken?channelName=${encodeURIComponent(channel)}&uid=${uid}`;

    const response = await axios.get(url);

    return res.json({
      channel,
      uid,
      token: response.data.token || response.data,
    });
  } catch (err) {
    console.error("call.getCallToken error", err.response?.data || err);
    return sendError(res, 500, "Failed to get Agora token");
  }
}

module.exports = {
  getCallToken,
};