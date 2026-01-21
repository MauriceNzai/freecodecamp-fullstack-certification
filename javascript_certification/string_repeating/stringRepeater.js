#!/usr/bin/node

/**
 * @file stringRepeater.js
 * @description
 * Utility functions for repeating strings using different techniques.
 * Each function demonstrates a valid approach with documented trade-offs.
 */

/**
 * Validates repetition count.
 * @param {number} num
 * @returns {boolean}
 */
function isValidCount(num) {
  return Number.isInteger(num) && num > 0;
}

/**
 * Repeat string using a for loop.
 *
 * Pros:
 * - Very explicit and easy to understand
 * - Interview-friendly
 *
 * Cons:
 * - Repeated string concatenation can be inefficient for large values
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithForLoop(str, num) {
  if (!isValidCount(num)) return "";

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

/**
 * Repeat string using a while loop.
 *
 * Pros:
 * - Clear control flow
 * - Useful when iteration logic is dynamic
 *
 * Cons:
 * - Same performance concerns as for-loop concatenation
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithWhileLoop(str, num) {
  if (!isValidCount(num)) return "";

  let result = "";
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

/**
 * Repeat string using recursion.
 *
 * Pros:
 * - Elegant and expressive
 * - Good for demonstrating recursion concepts
 *
 * Cons:
 * - Risk of call stack overflow for large num
 * - Not recommended for production use
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithRecursion(str, num) {
  if (!isValidCount(num)) return "";
  return str + repeatWithRecursion(str, num - 1);
}

/**
 * Repeat string using array fill and join.
 *
 * Pros:
 * - Better performance than manual concatenation
 * - Clean and readable
 *
 * Cons:
 * - Slightly more memory usage
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithArrayJoin(str, num) {
  if (!isValidCount(num)) return "";
  return new Array(num).fill(str).join("");
}

/**
 * Repeat string using reduce.
 *
 * Pros:
 * - Functional and expressive
 *
 * Cons:
 * - Less readable for beginners
 * - No performance advantage over other methods
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithReduce(str, num) {
  if (!isValidCount(num)) return "";

  return Array.from({ length: num }).reduce(
    (acc) => acc + str,
    ""
  );
}

/**
 * Repeat string using String.prototype.repeat().
 *
 * Pros:
 * - Most readable and intention-revealing
 * - Optimized by the JavaScript engine
 *
 * Cons:
 * - Does not demonstrate algorithmic fundamentals
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithRepeat(str, num) {
  if (!isValidCount(num)) return "";
  return str.repeat(num);
}

/**
 * Repeat string using padEnd().
 *
 * Pros:
 * - Concise
 * - Avoids explicit loops
 *
 * Cons:
 * - Less intuitive
 * - padEnd is not designed primarily for repetition
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithPadEnd(str, num) {
  if (!isValidCount(num)) return "";
  return str.padEnd(str.length * num, str);
}

/**
 * Repeat string using padStart().
 *
 * Pros:
 * - Works similarly to padEnd
 *
 * Cons:
 * - Even less intuitive than padEnd
 * - Rarely used for this purpose
 *
 * @param {string} str
 * @param {number} num
 * @returns {string}
 */
function repeatWithPadStart(str, num) {
  if (!isValidCount(num)) return "";
  return str.padStart(str.length * num, str);
}

module.exports = {
  repeatWithForLoop,
  repeatWithWhileLoop,
  repeatWithRecursion,
  repeatWithArrayJoin,
  repeatWithReduce,
  repeatWithRepeat,
  repeatWithPadEnd,
  repeatWithPadStart
};
