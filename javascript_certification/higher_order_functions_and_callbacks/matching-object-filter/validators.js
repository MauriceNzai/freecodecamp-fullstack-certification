#!/usr/bin/env node

/**
 * Validates inputs for the object matching functions.
 * @param {Array<Object>} arr - Array of objects to search
 * @param {Object} sourceObj - Object containing required properties
 * @throws {TypeError}
 */
function validateInputs(arr, sourceObj) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected first argument to be an array");
  }

  if (typeof sourceObj !== "object" || sourceObj === null || Array.isArray(sourceObj)) {
    throw new TypeError("Expected sourceObj to be a non-null object");
  }

  for (const item of arr) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      throw new TypeError("Array must contain only objects");
    }
  }
}

module.exports = { validateInputs };
