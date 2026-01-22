#!/usr/bin/node

/**
 * String Utilities Module
 * -----------------------
 * Provides multiple implementations for common string operations.
 * Each approach is documented with brief pros and cons.
 */

/**
 * Reverse a string using a stack-based approach (array pop).
 *
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 *
 * Pros:
 * - Demonstrates algorithmic thinking
 * - Clear use of stack behavior
 *
 * Cons:
 * - Uses extra memory for arrays
 */
function reverseUsingStack(str) {
  const chars = str.split("");
  const reversed = [];

  while (chars.length) {
    reversed.push(chars.pop());
  }

  return reversed.join("");
}

/**
 * Reverse a string using a backward for-loop.
 *
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 *
 * Pros:
 * - No array mutation
 * - Easy to understand
 *
 * Cons:
 * - String concatenation can be inefficient for very long strings
 */
function reverseUsingLoop(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

/**
 * Reverse a string using built-in JavaScript methods.
 *
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 *
 * Pros:
 * - Very concise and readable
 *
 * Cons:
 * - Hides the underlying algorithm
 * - Less suitable for learning or interviews
 */
function reverseUsingBuiltIns(str) {
  return str.split("").reverse().join("");
}

module.exports = {
  reverseUsingStack,
  reverseUsingLoop,
  reverseUsingBuiltIns
};
