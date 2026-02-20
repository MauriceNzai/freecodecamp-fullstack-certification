/**
 * Returns a valid random index for a given array length.
 * @param {number} length - Length of the array
 * @returns {number} - Random integer index between 0 and length - 1
 */
export function getRandomIndex(length) {
  if (!Number.isInteger(length) || length <= 0) {
    throw new Error("Array length must be a positive integer");
  }

  return Math.floor(Math.random() * length);
}