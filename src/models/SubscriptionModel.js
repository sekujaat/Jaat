// src/models/SubscriptionModel.js

export function createSubscription(payload = {}) {
  return {
    userId: payload.userId ?? "",
    isPremium: payload.isPremium ?? false,
    plan: payload.plan ?? "free", // free | monthly | yearly
    startedAt: payload.startedAt ?? null,
    expiresAt: payload.expiresAt ?? null,
  };
}