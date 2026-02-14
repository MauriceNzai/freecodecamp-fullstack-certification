const validateArrays = require("./validate_arrays");

/**
 * Computes symmetric difference using frequency counting.
 *
 * Algorithm:
 * - Count occurrences of elements across both arrays
 * - Return elements that appear only once
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Pros:
 * - Preserves order
 * - Explicitly handles duplicates
 *
 * Cons:
 * - Slightly more memory usage
 */
function symmetricDifferenceHashMap(arr1, arr2) {
  validateArrays(arr1, arr2);

  const counts = {};
  const result = [];
  const combined = arr1.concat(arr2);

  for (const item of combined) {
    counts[item] = (counts[item] || 0) + 1;
  }

  for (const item of combined) {
    if (counts[item] === 1) {
      result.push(item);
    }
  }

  return result;
}

module.exports = symmetricDifferenceHashMap;
