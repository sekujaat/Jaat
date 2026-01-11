import axios from "axios";
import { videoCallConfig } from "../config/videoCallConfig";

// ye sirf Agora token server ke liye hai
const api = axios.create({
  baseURL: videoCallConfig.tokenServerUrl,
});

export async function fetchAgoraToken(channelName, uid) {
  const res = await api.get("/rtcToken", {
    params: { channelName, uid },
  });
  // expected response: { token, channelName, uid, expiresIn }
  return res.data;
}