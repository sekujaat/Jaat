// src/services/videoCallService.js

const CallModel = require("../models/Call.model");
const { getRtcTokenForCall } = require("./agoraToken");

async function createVideoCall({ channel, callerId, calleeId }) {
  const token = await getRtcTokenForCall(channel, callerId);
  const call = await CallModel.logCall({
    channel,
    callerId,
    calleeId,
    status: "initiated",
  });

  return { call, token };
}

async function listUserCalls(userId) {
  return CallModel.listCallsForUser(userId);
}

module.exports = {
  createVideoCall,
  listUserCalls,
};