import { fetchAgoraToken } from "../videoCallService";
import { videoCallConfig } from "../../config/videoCallConfig";

// abhi backend pe matching nahi, sirf token + channel
export async function requestRandomMatch(uid) {
  const data = await fetchAgoraToken(videoCallConfig.defaultChannel, uid);

  return {
    partnerId: null,
    channelName: data.channelName || videoCallConfig.defaultChannel,
    token: data.token,
    uid: data.uid ?? uid,
  };
}