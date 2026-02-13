#!/usr/bin/env node

/**
 * Validates input parameters for index finder functions.
 * @param {Array<number>} arr - Input array
 * @param {number} num - Number to insert
 * @throws {TypeError}
 */
function validateInputs(arr, num) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("num must be a valid number");
  }

  if (!arr.every(n => typeof n === "number")) {
    throw new TypeError("Array must contain only numbers");
  }
}

module.exports = { validateInputs };
