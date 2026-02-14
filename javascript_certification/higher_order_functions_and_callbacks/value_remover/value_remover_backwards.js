#!/usr/bin/env node

/**
 * Value Remover (Backwards Loop Approach)
 * 
 * Removes all occurrences of specified values from the given array.
 * 
 * Pros:
 *   Works correctly with repeated elements
 *   Simple and intuitive
 *
 * Cons:
 *   Mutates cloned array with splice() (slightly less functional)
 *   Nested loops → O(n*m) time complexity
 *
 * @param {Array} arr - Input array to filter
 * @param {...*} rest - Values to remove
 * @returns {Array} Filtered array
 * @throws {TypeError} If arr is not an array
 */
function destroyer(arr, ...rest) {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array');
  }

  let result = [...arr]; // clone to avoid mutating input

  for (const value of rest) {
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] === value) {
        result.splice(i, 1);
      }
    }
  }

  return result;
}

module.exports = { destroyer };
