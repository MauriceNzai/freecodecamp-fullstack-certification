#!/usr/bin/nnode

/**
 * Module: String Ending Check Utilities
 *
 * This module provides four different methods to check whether
 * a string ends with a given substring. Each function demonstrates
 * a different approach, from using modern built-ins to low-level
 * manual character comparison.
 *
 * This is useful for learning different string manipulation techniques,
 * understanding performance trade-offs, and practicing JavaScript fundamentals.
 */

/**
 * Method 1: Using String.prototype.endsWith
 *
 * This is the simplest and most readable method.
 * It directly checks whether strToCheck ends with strToCheckAgainst.
 *
 * @param {string} strToCheck - The main string to check.
 * @param {string} strToCheckAgainst - The substring expected at the end.
 * @returns {boolean} True if strToCheck ends with strToCheckAgainst, false otherwise.
 *
 * @example
 * confirmEndingEndsWith("Connor", "n"); // true
 */
function confirmEndingEndsWith(strToCheck, strToCheckAgainst) {
  return strToCheck.endsWith(strToCheckAgainst);
}

/**
 * Method 2: Using String.prototype.slice
 *
 * This method extracts the last N characters of strToCheck, where
 * N is the length of strToCheckAgainst, and compares them directly.
 *
 * @param {string} strToCheck - The main string to check.
 * @param {string} strToCheckAgainst - The substring expected at the end.
 * @returns {boolean} True if strToCheck ends with strToCheckAgainst, false otherwise.
 *
 * @example
 * confirmEndingSlice("Connor", "n"); // true
 */
function confirmEndingSlice(strToCheck, strToCheckAgainst) {
  return strToCheck.slice(-strToCheckAgainst.length) === strToCheckAgainst;
}

/**
 * Method 3: Using indexOf with a loop
 *
 * This method searches for all occurrences of the substring using indexOf
 * and checks if any occurrence is positioned at the very end of the string.
 *
 * @param {string} strToCheck - The main string to check.
 * @param {string} strToCheckAgainst - The substring expected at the end.
 * @returns {boolean} True if strToCheck ends with strToCheckAgainst, false otherwise.
 *
 * @example
 * confirmEndingIndexOf("Connor", "n"); // true
 */
function confirmEndingIndexOf(strToCheck, strToCheckAgainst) {
  if (strToCheckAgainst.length === 0) return true; // empty string always matches

  let pos = strToCheck.indexOf(strToCheckAgainst);

  // loop through all occurrences
  while (pos !== -1) {
    if (pos + strToCheckAgainst.length === strToCheck.length) {
      return true; // substring occurs at the end
    }
    pos = strToCheck.indexOf(strToCheckAgainst, pos + 1);
  }

  return false; // not found at the end
}

/**
 * Method 4: Manual character-by-character comparison
 *
 * This method compares characters of strToCheck and strToCheckAgainst
 * from the end of the string, one by one.
 *
 * @param {string} strToCheck - The main string to check.
 * @param {string} strToCheckAgainst - The substring expected at the end.
 * @returns {boolean} True if strToCheck ends with strToCheckAgainst, false otherwise.
 *
 * @example
 * confirmEndingManual("Connor", "n"); // true
 */
function confirmEndingManual(strToCheck, strToCheckAgainst) {
  if (strToCheckAgainst.length > strToCheck.length) return false;

  for (let i = 0; i < strToCheckAgainst.length; i++) {
    const mainChar = strToCheck[strToCheck.length - strToCheckAgainst.length + i];
    const subChar = strToCheckAgainst[i];

    if (mainChar !== subChar) {
      return false; // mismatch found
    }
  }

  return true; // all characters match
}

// Export all functions to make them reusable
module.exports = {
  confirmEndingEndsWith,
  confirmEndingSlice,
  confirmEndingIndexOf,
  confirmEndingManual
};
