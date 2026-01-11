// src/models/CallModel.js

export function createCall(payload = {}) {
  return {
    id: payload.id ?? "",
    callerId: payload.callerId ?? "",
    calleeId: payload.calleeId ?? "",
    channel: payload.channel ?? "Synce",
    startedAt: payload.startedAt ?? null,
    endedAt: payload.endedAt ?? null,
    durationSeconds: payload.durationSeconds ?? 0,
    status: payload.status ?? "completed", // ringing | missed | rejected | completed
  };
}