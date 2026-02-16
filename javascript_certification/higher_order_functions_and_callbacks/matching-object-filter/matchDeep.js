#!/usr/bin/env node

const {validateInputs} = require("./validators.js");

/**
 * Filters objects that match sourceObj deeply (nested object support).
 *
 * Algorithm:
 * - Recursively compare values
 * - Primitive values → strict equality
 * - Objects → recursive comparison
 *
 * Pros:
 * - Supports nested objects
 * - More powerful matching
 *
 * Cons:
 * - Slower
 * - More complex logic
 * - No support for circular references
 */

function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEqual(a[key], b[key]));
}

function matchDeep(arr, sourceObj) {
  validateInputs(arr, sourceObj);

  if (Object.keys(sourceObj).length === 0) return [...arr];

  return arr.filter(obj =>
    Object.keys(sourceObj).every(key => deepEqual(obj[key], sourceObj[key]))
  );
}

module.exports = { matchDeep };
