#!/usr/bin/env node

/**
 * Sums all prime numbers up to and including n (brute force).
 * Time Complexity: O(n√n)
 * Space Complexity: O(1)
 */

const { validateInput } = require('./validateInput');
const { isPrime } = require('./isPrime');

function sumPrimesBrute(n) {
  validateInput(n);

  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

module.exports = { sumPrimesBrute };
