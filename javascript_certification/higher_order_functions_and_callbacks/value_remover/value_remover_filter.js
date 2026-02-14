#!/usr/bin/env node

/**
 * Value Remover (Functional Filter Approach)
 * 
 * Removes all occurrences of specified values from the given array.
 * Functional style, does not mutate the input.
 *
 * Algorithm Explanation
 *   Use Array.filter() to iterate over the array.
 *   For each element, keep it if it’s not included in the removal list.
 *     No mutation
 *     Cleaner, functional approach
 *
 * Pros:
 *   Readable, functional, avoids mutation
 *   Works for any element type (numbers, strings, objects if strict equality applies)
 * Cons:
 *   rest.includes() is O(m) for each element → O(n*m) overall
 *   For large rest arrays, can be slightly slower
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

  return arr.filter(item => !rest.includes(item));
}

module.exports = { destroyer };
