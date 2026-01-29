#!/usr/bin/node

/**
 * Odd Fibonacci Sum Calculator
 *
 * Provides multiple approaches for summing odd Fibonacci numbers
 * less than or equal to a given limit.
 */

/* =========================
   Input Validation
========================= */
function validateInput(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Input must be a valid number');
  }
  if (num < 1) {
    return false;
  }
  return true;
}

/* =========================
   Approach 1: Iterative (Recommended)
   Time: O(n) | Space: O(1)
========================= */
function sumFibsIterative(num) {
  if (!validateInput(num)) return 0;

  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    [prev, curr] = [curr, prev + curr];
  }

  return sum;
}

/* =========================
   Approach 2: Recursive
   Time: O(2^n) | Space: O(n)
========================= */
function sumFibsRecursive(num) {
  if (!validateInput(num)) return 0;

  function helper(prev, curr, acc) {
    if (curr > num) return acc;
    if (curr % 2 !== 0) acc += curr;
    return helper(curr, prev + curr, acc);
  }

  return helper(0, 1, 0);
}

/* =========================
   Approach 3: Optimized Odd-Only
   Time: O(n/3) | Space: O(1)
========================= */
function sumFibsOptimized(num) {
  if (!validateInput(num)) return 0;

  let a = 1;
  let b = 1;
  let sum = 0;

  while (a <= num) {
    sum += a;
    if (b <= num) sum += b;
    a = a + 2 * b;
    b = 2 * a - b;
  }

  return sum;
}

module.exports = {
  sumFibsIterative,
  sumFibsRecursive,
  sumFibsOptimized
};
