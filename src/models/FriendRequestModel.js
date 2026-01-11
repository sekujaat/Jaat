// src/models/FriendRequestModel.js

export function createFriendRequest(payload = {}) {
  return {
    id: payload.id ?? "",
    fromUserId: payload.fromUserId ?? "",
    toUserId: payload.toUserId ?? "",
    status: payload.status ?? "pending", // pending | accepted | rejected
    createdAt: payload.createdAt ?? null,
    respondedAt: payload.respondedAt ?? null,
  };
}