#!/usr/bin/env node

const {validateInputs} = require("./validators");

/**
 * Filters objects that fully match sourceObj using Array.every().
 *
 * Algorithm:
 * - Convert sourceObj keys into an array
 * - Ensure every key matches on the target object
 *
 * Pros:
 * - Very concise
 * - Declarative and expressive
 * - Easy to compose
 *
 * Cons:
 * - Slightly slower on very large datasets
 * - Harder to debug step-by-step
 */
function matchWithEvery(arr, sourceObj) {
  validateInputs(arr, sourceObj);

  if (Object.keys(sourceObj).length === 0) return [...arr];

  return arr.filter(obj =>
    Object.keys(sourceObj).every(
      key => obj[key] === sourceObj[key]
    )
  );
}

module.exports = { matchWithEvery };
