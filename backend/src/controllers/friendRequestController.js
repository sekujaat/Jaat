// src/controllers/friendRequestController.js

const FriendRequestModel = require("../models/FriendRequest.model");
const FriendshipModel = require("../models/Friendship");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

async function sendRequest(req, res) {
  try {
    const { fromUserId, toUserId } = req.body;

    if (!fromUserId || !toUserId) {
      return sendError(res, 400, "fromUserId and toUserId are required");
    }

    const request = await FriendRequestModel.createFriendRequest({
      fromUserId,
      toUserId,
    });

    return res.status(201).json({ request });
  } catch (err) {
    console.error("friend.sendRequest error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function acceptRequest(req, res) {
  try {
    const { id } = req.params;

    const request = await FriendRequestModel.updateFriendRequestStatus(
      id,
      "accepted"
    );
    if (!request) {
      return sendError(res, 404, "Request not found");
    }

    await FriendshipModel.createFriendship({
      userId1: request.from_user_id,
      userId2: request.to_user_id,
    });

    return res.json({ request });
  } catch (err) {
    console.error("friend.acceptRequest error", err);
    return sendError(res, 500, "Internal server error");
  }
}

module.exports = {
  sendRequest,
  acceptRequest,
};