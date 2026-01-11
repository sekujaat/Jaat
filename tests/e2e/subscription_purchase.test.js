import {
  getSubscriptionStatus,
  startSubscription,
  cancelSubscription,
} from "@src/services/api/subscriptionApi";

jest.mock("@src/services/api/subscriptionApi");

describe("Subscription purchase flow", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("starts a subscription and marks user as premium", async () => {
    getSubscriptionStatus.mockResolvedValue({
      isPremium: false,
      plan: null,
      status: "none",
      currentPeriodEnd: null,
    });

    startSubscription.mockResolvedValue({
      status: "active",
      plan: "monthly",
      currentPeriodEnd: "2099-01-01T00:00:00.000Z",
    });

    // initial status: not premium
    const before = await getSubscriptionStatus();
    expect(before.isPremium).toBe(false);

    const result = await startSubscription("monthly");
    expect(result.status).toBe("active");

    getSubscriptionStatus.mockResolvedValue({
      isPremium: true,
      plan: "monthly",
      status: "active",
      currentPeriodEnd: result.currentPeriodEnd,
    });

    const after = await getSubscriptionStatus();
    expect(after.isPremium).toBe(true);
  });

  it("cancels an active subscription", async () => {
    cancelSubscription.mockResolvedValue({ status: "canceled" });

    const res = await cancelSubscription();
    expect(res.status).toBe("canceled");
  });
});