import { requestRandomMatch } from "@src/services/videoCall/callMatchService";
import { fetchAgoraToken } from "@src/services/videoCallService";
import { videoCallConfig } from "@src/config/videoCallConfig";

jest.mock("@src/services/videoCallService");

describe("callMatchService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("wraps fetchAgoraToken and returns match object", async () => {
    fetchAgoraToken.mockResolvedValue({
      token: "test-token",
      channelName: videoCallConfig.defaultChannel,
      uid: 42,
    });

    const match = await requestRandomMatch(42);

    expect(fetchAgoraToken).toHaveBeenCalledWith(
      videoCallConfig.defaultChannel,
      42
    );
    expect(match.token).toBe("test-token");
    expect(match.channelName).toBe(videoCallConfig.defaultChannel);
    expect(match.uid).toBe(42);
    expect(match.partnerId).toBeNull();
  });
});