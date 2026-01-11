import { formatDate } from "@src/utils/formatters";

describe("Subscription model helpers", () => {
  function isActive(sub) {
    return sub.isPremium === true && sub.status === "active";
  }

  it("detects active subscription correctly", () => {
    const sub = {
      isPremium: true,
      status: "active",
      plan: "monthly",
      currentPeriodEnd: "2099-01-01T00:00:00.000Z",
    };

    expect(isActive(sub)).toBe(true);
  });

  it("handles inactive subscription", () => {
    const sub = {
      isPremium: false,
      status: "none",
      plan: null,
      currentPeriodEnd: null,
    };

    expect(isActive(sub)).toBe(false);
  });

  it("formats period end date", () => {
    const sub = {
      currentPeriodEnd: "2099-01-01T00:00:00.000Z",
    };

    const formatted = formatDate(sub.currentPeriodEnd);
    expect(typeof formatted).toBe("string");
    expect(formatted.length).toBeGreaterThan(0);
  });
});