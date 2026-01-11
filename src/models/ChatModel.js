// src/models/ChatModel.js

export function createChat(payload = {}) {
  return {
    id: payload.id ?? "",
    fromUserId: payload.fromUserId ?? "",
    toUserId: payload.toUserId ?? "",
    message: payload.message ?? "",
    sentAt: payload.sentAt ?? null,
    readAt: payload.readAt ?? null,
    isRead: payload.isRead ?? false,
  };
}