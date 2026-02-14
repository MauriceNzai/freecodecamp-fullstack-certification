const validateArrays = require("./validate_arrays");

/**
 * Computes symmetric difference using Sets.
 *
 * Algorithm:
 * - Convert arrays to sets
 * - Add elements unique to each set
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Pros:
 * - Very fast
 * - Removes duplicates automatically
 *
 * Cons:
 * - Loses original ordering
 * - Only works well with primitives
 */
function symmetricDifferenceSet(arr1, arr2) {
  validateArrays(arr1, arr2);

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const item of set1) {
    if (!set2.has(item)) result.push(item);
  }

  for (const item of set2) {
    if (!set1.has(item)) result.push(item);
  }

  return result;
}

module.exports = symmetricDifferenceSet;
