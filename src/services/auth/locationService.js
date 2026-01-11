import Geolocation from "@react-native-community/geolocation";
import { api, authHeaders } from "../api/client";

export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });
}

export async function sendLocationToServer() {
  const coords = await getCurrentPosition();
  await api.post(
    "/location/update",
    {
      latitude: coords.latitude,
      longitude: coords.longitude,
    },
    { headers: await authHeaders() }
  );
}