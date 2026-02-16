#!/usr/bin/env node

const {validateInputs} = require("./validators");

/**
 * Filters objects that fully match sourceObj using for...in loops.
 *
 * Algorithm:
 * 1. Loop through each object in arr
 * 2. For each key in sourceObj:
 *    - If key is missing OR value mismatch → reject object
 * 3. If all keys match → include object
 *
 * Pros:
 * - Very readable
 * - Easy to debug
 * - Fast execution
 *
 * Cons:
 * - More verbose than functional approaches
 */
function matchWithLoop(arr, sourceObj) {
  validateInputs(arr, sourceObj);

  if (Object.keys(sourceObj).length === 0) return [...arr];

  return arr.filter(obj => {
    for (const key in sourceObj) {
      if (!(key in obj) || obj[key] !== sourceObj[key]) {
        return false;
      }
    }
    return true;
  });
}

module.exports = { matchWithLoop };
