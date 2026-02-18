#!/usr/bin/env node

/**
 * Flattens a nested array using an explicit stack (no recursion).
 * 
 * @param {any[]} input - The array to flatten
 * @returns {any[]} A new flattened array
 * @throws {TypeError} If input is not an array
 */
function flattenIterative(input) {
  if (!Array.isArray(input)) {
    throw new TypeError("Input must be an array");
  }

  const stack = [...input];   // copy to avoid mutating original
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i]);
      }
    } else {
        // Insert items to the start of the result array
        result.unshift(current);
    }
  }

  return result;
}

module.exports = flattenIterative;
