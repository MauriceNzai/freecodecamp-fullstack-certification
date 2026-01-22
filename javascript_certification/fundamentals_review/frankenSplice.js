#!/usr/bin/node

/**
 * Array Utilities Module
 * Provides reusable array manipulation functions.
 * 
 * Included Functions:
 * 1. frankenSplice - inserts one array into another at a given index using slice + spread
 * 2. frankenSpliceInline - same as frankenSplice but fully inline
 * 3. frankenSpliceWithSplice - uses Array.splice on a copy to insert elements
 */

/**
 * Inserts arr1 into arr2 at the specified index without mutating the original arrays.
 * Uses slice() and spread operator.
 * 
 * @param {Array} arr1 - Array to insert
 * @param {Array} arr2 - Target array
 * @param {number} index - Index in arr2 to insert arr1 at
 * @returns {Array} New array with arr1 inserted into arr2
 */
function frankenSplice(arr1, arr2, index) {
  const beforeIndex = arr2.slice(0, index);
  const afterIndex = arr2.slice(index);
  return [...beforeIndex, ...arr1, ...afterIndex];
}

/**
 * Inserts arr1 into arr2 at the specified index using an inline approach.
 * Fully inline, fewer intermediate variables.
 * 
 * @param {Array} arr1 - Array to insert
 * @param {Array} arr2 - Target array
 * @param {number} index - Index in arr2 to insert arr1 at
 * @returns {Array} New array with arr1 inserted into arr2
 */
function frankenSpliceInline(arr1, arr2, index) {
  return [...arr2.slice(0, index), ...arr1, ...arr2.slice(index)];
}

/**
 * Inserts arr1 into arr2 at the specified index using splice on a copy.
 * Demonstrates controlled mutation without altering original arrays.
 * 
 * @param {Array} arr1 - Array to insert
 * @param {Array} arr2 - Target array
 * @param {number} index - Index in arr2 to insert arr1 at
 * @returns {Array} New array with arr1 inserted into arr2
 */
function frankenSpliceWithSplice(arr1, arr2, index) {
  const result = [...arr2]; // copy to avoid mutating original
  result.splice(index, 0, ...arr1);
  return result;
}

// Export all functions for external use
module.exports = {
  frankenSplice,
  frankenSpliceInline,
  frankenSpliceWithSplice,
};
