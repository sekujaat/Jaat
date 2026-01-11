export function isValidEmail(email) {
  const re = /S+@S+.S+/;
  return re.test(String(email).toLowerCase());
}

export function isStrongPassword(password) {
  return typeof password === "string" && password.length >= 6;
}