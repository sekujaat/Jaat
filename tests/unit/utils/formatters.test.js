import { formatDate, formatTime, formatDuration } from "@src/utils/formatters";

describe("formatters", () => {
  it("formats date string", () => {
    const result = formatDate("2025-01-01T10:00:00.000Z");
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty string for invalid date", () => {
    const result = formatDate("not-a-date");
    expect(result).toBe("");
  });

  it("formats time string", () => {
    const result = formatTime("2025-01-01T10:00:00.000Z");
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  it("formats duration", () => {
    expect(formatDuration(0)).toBe("0m 0s");
    expect(formatDuration(125)).toBe("2m 5s");
  });
});