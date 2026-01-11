import { isValidEmail, isStrongPassword } from "@src/utils/validators";

describe("validators", () => {
  it("validates email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);
  });

  it("validates password strength", () => {
    expect(isStrongPassword("123456")).toBe(true);
    expect(isStrongPassword("123")).toBe(false);
    expect(isStrongPassword("")).toBe(false);
  });
});