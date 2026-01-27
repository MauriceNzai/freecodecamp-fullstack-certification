#!/usr/bin/node

/**
 * Validate input for sumAll functions
 * @param {Array} arr
 */
function validateInput(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  if (arr.length !== 2) {
    throw new Error("Input array must contain exactly two numbers");
  }

  if (!arr.every(Number.isFinite)) {
    throw new TypeError("Both values must be finite numbers");
  }

  if (!arr.every(Number.isInteger)) {
    throw new TypeError("Both values must be integers");
  }
}

/**
 * Normalize input so [min, max]
 * @param {number[]} arr
 * @returns {[number, number]}
 */
function normalize(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/**
 * Approach 1: Loop-based summation
 * @param {number[]} arr
 * @returns {number}
 */
function sumAllLoop(arr) {
  validateInput(arr);
  const [min, max] = normalize(arr);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Approach 2: Arithmetic series formula
 * Formula: n * (first + last) / 2
 * @param {number[]} arr
 * @returns {number}
 */
function sumAllFormula(arr) {
  validateInput(arr);
  const [min, max] = normalize(arr);

  const count = max - min + 1;
  return (count * (min + max)) / 2;
}

/**
 * Approach 3: Reduce-based approach
 * @param {number[]} arr
 * @returns {number}
 */
function sumAllReduce(arr) {
  validateInput(arr);
  const [min, max] = normalize(arr);

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  return range.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Approach 4: Recursive approach
 * @param {number[]} arr
 * @returns {number}
 */
function sumAllRecursive(arr) {
  validateInput(arr);
  let [min, max] = normalize(arr);

  function recurse(current, end) {
    if (current > end) return 0;
    return current + recurse(current + 1, end);
  }

  return recurse(min, max);
}

module.exports = {
  sumAllLoop,
  sumAllFormula,
  sumAllReduce,
  sumAllRecursive
};
