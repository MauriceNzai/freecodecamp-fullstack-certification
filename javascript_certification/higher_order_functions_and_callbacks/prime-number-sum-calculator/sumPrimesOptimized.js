#!/usr/bin/env node

/**
 * Optimized summation using trial division.
 * Time Complexity: O(n√n)
 * Space Complexity: O(1)
 */

const { validateInput } = require('./validateInput');
const { isPrime } = require('./isPrime');

function sumPrimesOptimized(n) {
  validateInput(n);

  if (n < 2) return 0;

  let sum = 2;
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

module.exports = { sumPrimesOptimized };
