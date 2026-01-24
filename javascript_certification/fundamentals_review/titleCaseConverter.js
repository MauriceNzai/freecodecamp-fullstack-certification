#!/usr/bin/node

/**
 * Title Case Utility Module
 * -------------------------
 * Provides multiple approaches for converting a string to Title Case.
 */

/**
 * Validate input and normalize whitespace.
 * @param {string} str
 * @returns {string}
 */
function normalizeInput(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  return str
    .trim()
    .replace(/\s+/g, " ");
}

/**
 * Approach 1: Loop-based implementation
 *
 * Pros:
 * - Easy to understand
 * - Beginner-friendly
 *
 * Cons:
 * - More verbose than functional approaches
 */
function titleCaseLoop(str) {
  str = normalizeInput(str).toLowerCase();
  const words = str.split(" ");
  const result = [];

  for (let word of words) {
    if (word.length === 0) continue;
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

/**
 * Approach 2: Array.map implementation
 *
 * Pros:
 * - Clean and expressive
 * - Less boilerplate
 *
 * Cons:
 * - Slightly less explicit for beginners
 */
function titleCaseMap(str) {
  str = normalizeInput(str).toLowerCase();

  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Approach 3: Regular Expression implementation
 *
 * Pros:
 * - Very concise
 * - Handles punctuation well
 *
 * Cons:
 * - Regex can be harder to read and maintain
 */
function titleCaseRegex(str) {
  str = normalizeInput(str).toLowerCase();
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Approach 4: Character array manipulation
 *
 * Pros:
 * - Fine-grained control
 * - Useful for learning string internals
 *
 * Cons:
 * - Verbose
 * - Not ideal for production unless needed
 */
function titleCaseCharArray(str) {
  str = normalizeInput(str).toLowerCase();
  const chars = str.split("");

  for (let i = 0; i < chars.length; i++) {
    if (i === 0 || chars[i - 1] === " ") {
      chars[i] = chars[i].toUpperCase();
    }
  }

  return chars.join("");
}

module.exports = {
  titleCaseLoop,
  titleCaseMap,
  titleCaseRegex,
  titleCaseCharArray
};
