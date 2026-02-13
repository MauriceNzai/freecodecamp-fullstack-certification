#!/usr/bin/env node

const { validateInputs } = require("./utils");

/**
 * Binary search approach for finding insert position.
 * Time: O(n log n) due to sort + O(log n) search
 * Space: O(n)
 */
function getIndexToInsertBinary(arr, num) {
  validateInputs(arr, num);

  const sorted = [...arr].sort((a, b) => a - b);

  let left = 0;
  let right = sorted.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (sorted[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

module.exports = { getIndexToInsertBinary };
