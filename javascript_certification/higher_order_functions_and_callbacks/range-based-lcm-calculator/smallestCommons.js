#!/usr/bin/env node

const { validateRange } = require("./validators");
const { lcm } = require("./math");

/**
 * Returns the smallest common multiple of all numbers in range
 * @param {number[]} arr
 * @returns {number}
 */
function smallestCommons(arr) {
  validateRange(arr);

  const [min, max] = [...arr].sort((a, b) => a - b);

  let currentLCM = min;

  for (let i = min + 1; i <= max; i++) {
    currentLCM = lcm(currentLCM, i);
  }

  return currentLCM;
}

module.exports = smallestCommons;
