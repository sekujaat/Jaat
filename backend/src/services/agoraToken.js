// src/services/agoraToken.js

const { fetchRtcToken } = require("./agoraService");

// Thin wrapper so controller ya routes yahan se easily token le saken
async function getRtcTokenForCall(channel, uid) {
  return fetchRtcToken({ channel, uid });
}

module.exports = {
  getRtcTokenForCall,
};