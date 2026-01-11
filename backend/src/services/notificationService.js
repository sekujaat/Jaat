// src/services/notificationService.js

// Abhi simple console log; baad me FCM ya kisi push service se replace kar sakte ho

async function sendNotification({ toUserId, title, body, data = {} }) {
  // TODO: integrate real push service
  console.log("📩 Notification:", { toUserId, title, body, data });
  return true;
}

async function notifyFriendRequest({ toUserId, fromUserId }) {
  return sendNotification({
    toUserId,
    title: "New friend request",
    body: `User ${fromUserId} sent you a friend request`,
    data: { type: "friend_request", fromUserId },
  });
}

async function notifyCallIncoming({ toUserId, channel, callerId }) {
  return sendNotification({
    toUserId,
    title: "Incoming call",
    body: `User ${callerId} is calling you`,
    data: { type: "call", channel, callerId },
  });
}

module.exports = {
  sendNotification,
  notifyFriendRequest,
  notifyCallIncoming,
};