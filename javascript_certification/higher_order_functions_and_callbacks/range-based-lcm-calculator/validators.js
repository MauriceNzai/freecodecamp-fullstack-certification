#!/usr/bin/env node

/**
 * Validates input for smallestCommons
 * @param {any} arr
 * @throws {TypeError}
 */
function validateRange(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  if (arr.length !== 2) {
    throw new TypeError("Array must contain exactly two numbers.");
  }

  if (!arr.every(n => Number.isInteger(n))) {
    throw new TypeError("Both values must be integers.");
  }
}

module.exports = { validateRange };
