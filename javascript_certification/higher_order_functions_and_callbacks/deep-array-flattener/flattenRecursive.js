#!/usr/bin/env node

/**
 * Recursively flattens a nested array into a single-level array.
 * 
 * @param {any[]} input - The array to flatten (can contain nested arrays)
 * @returns {any[]} A new flattened array
 * @throws {TypeError} If input is not an array
 */
function flattenRecursive(input) {
  if (!Array.isArray(input)) {
    throw new TypeError("Input must be an array");
  }

  const result = [];

  for (const item of input) {
    if (Array.isArray(item)) {
      result.push(...flattenRecursive(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenRecursive;
