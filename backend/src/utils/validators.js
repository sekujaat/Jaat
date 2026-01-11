// src/utils/validators.js

function isEmail(value) {
  if (!value) return false;
  const re = /^[^s@]+@[^s@]+.[^s@]+$/;
  return re.test(String(value).toLowerCase());
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isPositiveInt(value) {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
}

function validateRegisterInput({ email, password }) {
  const errors = {};

  if (!isEmail(email)) {
    errors.email = "Valid email is required";
  }

  if (!isNonEmptyString(password) || password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = {
  isEmail,
  isNonEmptyString,
  isPositiveInt,
  validateRegisterInput,
};