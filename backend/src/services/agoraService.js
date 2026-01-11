// src/services/agoraService.js

const axios = require("axios");
const agoraConfig = require("../config/agoraConfig");

async function fetchRtcToken({ channel, uid = 0 }) {
  if (!agoraConfig.tokenServerUrl) {
    throw new Error("Agora token server URL not configured");
  }

  if (!channel) {
    throw new Error("channel is required");
  }

  const base = agoraConfig.tokenServerUrl.replace(//$/, "");
  const url = `${base}/rtcToken?channelName=${encodeURIComponent(
    channel
  )}&uid=${uid}`;

  const response = await axios.get(url);
  return response.data.token || response.data;
}

module.exports = {
  fetchRtcToken,
};