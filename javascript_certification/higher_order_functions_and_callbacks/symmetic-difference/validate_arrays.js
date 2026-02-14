#!/usr/bin/env node

/**
 * Validates that both inputs are arrays.
 *
 * @param {any} arr1
 * @param {any} arr2
 * @throws {TypeError} If either argument is not an array
 */
function validateArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Both inputs must be arrays");
  }
}

module.exports = validateArrays;
