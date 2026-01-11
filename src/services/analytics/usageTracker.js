import { api } from "../api/client";

export async function trackScreenView(screenName) {
  try {
    await api.post("/analytics/screen-view", {
      screen: screenName,
      ts: new Date().toISOString(),
    });
  } catch {}
}

export async function trackEvent(name, props = {}) {
  try {
    await api.post("/analytics/event", {
      name,
      props,
      ts: new Date().toISOString(),
    });
  } catch {}
}