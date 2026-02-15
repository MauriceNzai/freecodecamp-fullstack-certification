#!/usr/bin/env node

/**
 * Checks whether a number is prime using optimized trial division.
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { isPrime };
