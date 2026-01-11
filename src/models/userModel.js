// src/models/userModel.js

export function createUser(payload = {}) {
  return {
    id: payload.id ?? "",
    name: payload.name ?? "",
    username: payload.username ?? "",
    avatarUrl: payload.avatarUrl ?? null,
    bio: payload.bio ?? "",
    isOnline: payload.isOnline ?? false,
    isPremium: payload.isPremium ?? false,
    createdAt: payload.createdAt ?? null,
  };
}