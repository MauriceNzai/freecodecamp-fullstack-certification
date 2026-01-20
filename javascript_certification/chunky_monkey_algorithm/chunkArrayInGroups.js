#!/usr/bin/node

/**
 * Splits an array into groups of a specified size.
 *
 * @param {Array} array - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} A new array containing sub-arrays of the given size.
 */
function chunkArrayInGroups(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError("First argument must be an array");
  }

  if (size <= 0) {
    throw new RangeError("Chunk size must be greater than zero");
  }

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
