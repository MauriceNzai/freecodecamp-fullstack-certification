#!/usr/bin/node

/**
 * Password Generator Module
 * --------------------------
 * Provides multiple strategies for generating passwords.
 */

const crypto = require("crypto");

/* =======================
   Validation Utilities
======================= */

function validateLength(length) {
  if (typeof length !== "number" || !Number.isInteger(length)) {
    throw new TypeError("Password length must be an integer");
  }
  if (length < 4) {
    throw new RangeError("Password length must be at least 4");
  }
}

/* =======================
   Approach 1: Basic Random
======================= */
/**
 * Pros:
 * - Simple
 * - Fast
 * Cons:
 * - No character diversity guarantee
 * - Not cryptographically secure
 */
function generateBasic(length) {
  validateLength(length);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  return password;
}

/* =======================
   Approach 2: Guaranteed Categories
======================= */
/**
 * Pros:
 * - Ensures strong password rules
 * Cons:
 * - Slightly more complex
 */
function generateWithRules(length) {
  validateLength(length);

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const special = "!@#$%^&*()";
  const all = upper + lower + digits + special;

  let password = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    digits[Math.floor(Math.random() * digits.length)],
    special[Math.floor(Math.random() * special.length)],
  ];

  for (let i = password.length; i < length; i++) {
    password.push(all[Math.floor(Math.random() * all.length)]);
  }

  // Shuffle (Fisher–Yates)
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}

/* =======================
   Approach 3: Crypto-Secure
======================= */
/**
 * Pros:
 * - Cryptographically secure
 * Cons:
 * - Node.js only
 */
function generateSecure(length) {
  validateLength(length);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = crypto.randomInt(0, chars.length);
    password += chars[index];
  }
  return password;
}

module.exports = {
  generateBasic,
  generateWithRules,
  generateSecure,
};
