const validateArrays = require("./validate_arrays");

/**
 * Computes the symmetric difference of two arrays using filter + includes.
 *
 * Algorithm:
 * - Find elements in arr1 not in arr2
 * - Find elements in arr2 not in arr1
 * - Merge both results
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(n)
 *
 * Pros:
 * - Simple and readable
 * - Good for small datasets
 *
 * Cons:
 * - Slow for large arrays
 * - includes() causes quadratic time complexity
 */
function symmetricDifferenceFilter(arr1, arr2) {
  validateArrays(arr1, arr2);

  const filtered1 = arr1.filter(x => !arr2.includes(x));
  const filtered2 = arr2.filter(x => !arr1.includes(x));

  return [...filtered1, ...filtered2];
}

module.exports = symmetricDifferenceFilter;
