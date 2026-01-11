// src/models/LocationModel.js

export function createLocation(payload = {}) {
  return {
    userId: payload.userId ?? "",
    latitude: payload.latitude ?? 0,
    longitude: payload.longitude ?? 0,
    updatedAt: payload.updatedAt ?? null,
  };
}