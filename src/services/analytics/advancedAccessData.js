import { api } from "../api/client";

export async function logAccessData(eventName, payload = {}) {
  try {
    await api.post("/analytics/advanced-access", {
      event: eventName,
      payload,
      ts: new Date().toISOString(),
    });
  } catch {}
}