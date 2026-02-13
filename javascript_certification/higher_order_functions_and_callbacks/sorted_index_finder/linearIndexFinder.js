#!/usr/bin/env node

const { validateInputs } = require("./utils");

/**
 * Finds the correct index to insert num into a sorted array (linear scan).
 * Time: O(n log n) due to sort + O(n) scan
 * Space: O(n) due to copying array
 */
function getIndexToInsertLinear(arr, num) {
  validateInputs(arr, num);

  const sorted = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) return i;
  }

  return sorted.length;
}

module.exports = { getIndexToInsertLinear };
