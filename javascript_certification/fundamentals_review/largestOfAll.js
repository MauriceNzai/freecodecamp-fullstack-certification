#!/usr/bin/node

/**
 * Array utility functions.
 * @module array-utils
 */

/**
 * Returns an array containing the largest number from each sub-array
 * using imperative loops.
 *
 * @param {number[][]} arrayOfArrays - An array of numeric sub-arrays.
 * @returns {number[]} An array of the largest numbers from each sub-array.
 *
 * @example
 * largestOfAll([[1, 2, 3], [4, 5], [6]]);
 * // → [3, 5, 6]
 *
 * @pros
 * - Very explicit and beginner-friendly
 * - Works well for large arrays
 *
 * @cons
 * - More verbose than functional approaches
 */
function largestOfAll(arrayOfArrays) {
  const largestNumbers = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i].length === 0) continue;

    let largest = arrayOfArrays[i][0];

    for (let j = 1; j < arrayOfArrays[i].length; j++) {
      if (arrayOfArrays[i][j] > largest) {
        largest = arrayOfArrays[i][j];
      }
    }

    largestNumbers.push(largest);
  }

  return largestNumbers;
}

/**
 * Returns an array containing the largest number from each sub-array
 * using map() and Math.max().
 *
 * @param {number[][]} arrayOfArrays - An array of numeric sub-arrays.
 * @returns {number[]} An array of the largest numbers from each sub-array.
 *
 * @example
 * largestOfAllUsingMathMax([[1, 2], [3, 4]]);
 * // → [2, 4]
 *
 * @pros
 * - Very concise and readable
 *
 * @cons
 * - Spread operator may be inefficient for very large arrays
 */
function largestOfAllUsingMathMax(arrayOfArrays) {
  return arrayOfArrays
    .filter(arr => arr.length > 0)
    .map(arr => Math.max(...arr));
}

/**
 * Returns an array containing the largest number from each sub-array
 * using map() and reduce().
 *
 * @param {number[][]} arrayOfArrays - An array of numeric sub-arrays.
 * @returns {number[]} An array of the largest numbers from each sub-array.
 *
 * @example
 * largestOfAllUsingReduce([[5, 1], [10, 3]]);
 * // → [5, 10]
 *
 * @pros
 * - Functional and expressive
 * - No explicit mutation
 *
 * @cons
 * - Slightly harder to read for beginners
 */
function largestOfAllUsingReduce(arrayOfArrays) {
  return arrayOfArrays
    .filter(arr => arr.length > 0)
    .map(arr =>
      arr.reduce((max, current) =>
        current > max ? current : max
      )
    );
}

module.exports = {
  largestOfAll,
  largestOfAllUsingMathMax,
  largestOfAllUsingReduce
};
