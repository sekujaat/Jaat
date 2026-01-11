import { requestRandomMatch } from "./callMatchService";

export async function startRandomCall(uid) {
  const match = await requestRandomMatch(uid);
  return {
    channelName: match.channelName,
    token: match.token,
    uid: match.uid,
    partnerId: match.partnerId,
  };
}