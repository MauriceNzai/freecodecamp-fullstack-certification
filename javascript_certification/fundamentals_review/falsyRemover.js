#!/usr/bin/node

/**
 * @module array-utils
 * Utility functions for array operations
 */

/**
 * Validates that the input is an array.
 * @param {*} arr
 * @throws {TypeError}
 */
function validateArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array as input");
  }
}

/**
 * Removes falsy values using Boolean coercion.
 *
 * @param {Array} arr
 * @returns {Array}
 *
 * @pros
 * - Very concise
 * - Fast and readable
 *
 * @cons
 * - Implicit logic may confuse beginners
 */
function removeFalsyBoolean(arr) {
  validateArray(arr);
  return arr.filter(Boolean);
}

/**
 * Removes falsy values using double negation (!!).
 *
 * @param {Array} arr
 * @returns {Array}
 *
 * @pros
 * - Explicit boolean conversion
 *
 * @cons
 * - Slightly more verbose than filter(Boolean)
 */
function removeFalsyDoubleNegation(arr) {
  validateArray(arr);
  return arr.filter(value => !!value);
}

/**
 * Removes falsy values using a classic for-loop.
 *
 * @param {Array} arr
 * @returns {Array}
 *
 * @pros
 * - Very explicit and beginner-friendly
 * - Easy to debug
 *
 * @cons
 * - More verbose
 */
function removeFalsyLoop(arr) {
  validateArray(arr);

  const result = [];
  for (const value of arr) {
    if (value) {
      result.push(value);
    }
  }
  return result;
}

/**
 * Removes falsy values using reduce().
 *
 * @param {Array} arr
 * @returns {Array}
 *
 * @pros
 * - Functional programming style
 * - Very flexible
 *
 * @cons
 * - Harder to read for beginners
 */
function removeFalsyReduce(arr) {
  validateArray(arr);

  return arr.reduce((acc, value) => {
    if (value) acc.push(value);
    return acc;
  }, []);
}

/**
 * Removes falsy values using explicit comparisons.
 *
 * @param {Array} arr
 * @returns {Array}
 *
 * @pros
 * - Very explicit control over what is removed
 *
 * @cons
 * - Verbose
 * - Easy to miss edge cases
 */
function removeFalsyExplicit(arr) {
  validateArray(arr);

  return arr.filter(
    value =>
      value !== false &&
      value !== 0 &&
      value !== "" &&
      value !== null &&
      value !== undefined &&
      !Number.isNaN(value)
  );
}

module.exports = {
  removeFalsyBoolean,
  removeFalsyDoubleNegation,
  removeFalsyLoop,
  removeFalsyReduce,
  removeFalsyExplicit
};
