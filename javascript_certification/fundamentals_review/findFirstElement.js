#!/usr/bin/node

/**
 * @module array-find-utils
 * Utilities for finding the first element in an array
 * that satisfies a given condition.
 */

/**
 * Finds the first element using a `for...of` loop.
 *
 * @param {Array} arr - The array to search
 * @param {Function} predicate - Function to test each element
 * @returns {*} The first matching element or undefined
 *
 * @example
 * findFirstLoop([1, 3, 5, 8], n => n % 2 === 0);
 * // → 8
 *
 * @pros
 * - Very readable
 * - Easy to debug
 *
 * @cons
 * - Slightly more verbose than built-in methods
 */
function findFirstLoop(arr, predicate) {
  for (const element of arr) {
    if (predicate(element)) {
      return element;
    }
  }
  return undefined;
}

/**
 * Finds the first element using a traditional `for` loop.
 *
 * @param {Array} arr - The array to search
 * @param {Function} predicate - Function to test each element
 * @returns {*} The first matching element or undefined
 *
 * @example
 * findFirstFor([1, 3, 5, 8], n => n % 2 === 0);
 * // → 8
 *
 * @pros
 * - Explicit control over index
 * - Familiar to beginners
 *
 * @cons
 * - More boilerplate code
 */
function findFirstFor(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

/**
 * Finds the first element using Array.prototype.find.
 *
 * @param {Array} arr - The array to search
 * @param {Function} predicate - Function to test each element
 * @returns {*} The first matching element or undefined
 *
 * @example
 * findFirstBuiltIn([1, 3, 5, 8], n => n % 2 === 0);
 * // → 8
 *
 * @pros
 * - Very concise
 * - Idiomatic modern JavaScript
 *
 * @cons
 * - Abstracts iteration logic
 * - Less suitable for learning loops
 */
function findFirstBuiltIn(arr, predicate) {
  return arr.find(predicate);
}

module.exports = {
  findFirstLoop,
  findFirstFor,
  findFirstBuiltIn
};
