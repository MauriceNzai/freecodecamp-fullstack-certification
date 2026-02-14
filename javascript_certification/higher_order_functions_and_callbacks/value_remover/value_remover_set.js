#!/usr/bin/env node

/**
 * Value Remover (Optimized Set Approach)
 * 
 * Removes all occurrences of specified values from the given array.
 * Uses a Set for fast O(1) lookups.
 *
 * Algorithm Explanation
 *   Convert rest into a Set for O(1) lookup.
 *   Use filter() to keep elements not in the Set.
 *     Optimizes performance when many values need removal
 *
 * Pros:
 *   Fast for large rest arrays → O(n) complexity
 *   Clean, functional, and scalable
 * Cons:
 *   Slight overhead in creating the Set
 *   Works only if element types are directly comparable with Set (===)
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

  const removeSet = new Set(rest);
  return arr.filter(item => !removeSet.has(item));
}

module.exports = { destroyer };
