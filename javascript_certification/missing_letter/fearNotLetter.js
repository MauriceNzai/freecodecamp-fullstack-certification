#!/usr/bin/node

/**
 * @fileoverview
 * A utility module for detecting a missing letter in an alphabetical range.
 * The module exposes a primary implementation and several alternative
 * strategies for educational and comparative purposes.
 */

/**
 * ============================================================
 * PRIMARY IMPLEMENTATION (Recommended)
 * ============================================================
 */

/**
 * Finds the missing letter in an alphabetical range using
 * character code comparison.
 *
 * @param {string} str - Alphabetically ordered string with at most one missing letter.
 * @returns {string|undefined} The missing letter, or undefined if none is missing.
 *
 * @example
 * fearNotLetter("abce"); // "d"
 * fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // undefined
 *
 * @complexity
 * Time: O(n)
 * Space: O(1)
 */
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    if (nextCode !== currentCode + 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  return undefined;
}

/**
 * ============================================================
 * ALTERNATIVE IMPLEMENTATIONS
 * ============================================================
 */

/**
 * Option 2: Generate the expected full alphabet range and compare.
 *
 * Pros:
 * - Easy to understand
 * - Beginner-friendly
 *
 * Cons:
 * - Slightly less efficient
 */
function fearNotLetterByRangeGeneration(str) {
  const start = str.charCodeAt(0);
  const end = str.charCodeAt(str.length - 1);

  let expected = "";
  for (let code = start; code <= end; code++) {
    expected += String.fromCharCode(code);
  }

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== str[i]) {
      return expected[i];
    }
  }
  return undefined;
}

/**
 * Option 3: Functional programming approach using reduce.
 *
 * Pros:
 * - Declarative and expressive
 * - Aligns with modern JS practices
 *
 * Cons:
 * - Harder to read for beginners
 */
function fearNotLetterByReduce(str) {
  return str.split("").reduce((missing, char, index, arr) => {
    if (missing) return missing;

    const current = char.charCodeAt(0);
    const next = arr[index + 1]?.charCodeAt(0);

    if (next && next !== current + 1) {
      return String.fromCharCode(current + 1);
    }
    return undefined;
  }, undefined);
}

/**
 * Option 4: Alphabet reference lookup.
 *
 * Pros:
 * - Very readable
 * - No character code math
 *
 * Cons:
 * - Limited to lowercase English alphabet
 */
function fearNotLetterByAlphabetLookup(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return undefined;
}

/**
 * Option 5: Recursive approach.
 *
 * Pros:
 * - Elegant and educational
 * - Demonstrates recursion
 *
 * Cons:
 * - Not ideal for production
 * - Risk of stack overflow for large inputs
 */
function fearNotLetterRecursive(str, index = 0) {
  if (index >= str.length - 1) return undefined;

  const current = str.charCodeAt(index);
  const next = str.charCodeAt(index + 1);

  if (next !== current + 1) {
    return String.fromCharCode(current + 1);
  }

  return fearNotLetterRecursive(str, index + 1);
}

/**
 * ============================================================
 * MODULE EXPORTS
 * ============================================================
 */
module.exports = {
  fearNotLetter, // primary API
  fearNotLetterByRangeGeneration,
  fearNotLetterByReduce,
  fearNotLetterByAlphabetLookup,
  fearNotLetterRecursive
};
