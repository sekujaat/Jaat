import { startRandomCall } from "@src/services/videoCall/videoCallService";
import { requestRandomMatch } from "@src/services/videoCall/callMatchService";

jest.mock("@src/services/videoCall/callMatchService");

describe("Random call flow", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("requests a match and returns token + channel", async () => {
    requestRandomMatch.mockResolvedValue({
      partnerId: "partner-1",
      channelName: "Synce",
      token: "test-token",
      uid: 123,
    });

    const call = await startRandomCall(123);

    expect(requestRandomMatch).toHaveBeenCalledWith(123);
    expect(call.token).toBe("test-token");
    expect(call.channelName).toBe("Synce");
    expect(call.partnerId).toBe("partner-1");
  });
});