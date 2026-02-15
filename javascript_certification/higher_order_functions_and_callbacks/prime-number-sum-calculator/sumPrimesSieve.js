#!/usr/bin/env node
/**
 * Sums primes using Sieve of Eratosthenes.
 * Time Complexity: O(n log log n)
 * Space Complexity: O(n)
 */

const { validateInput } = require('./validateInput');

function sumPrimesSieve(n) {
  validateInput(n);

  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) sum += i;
  }

  return sum;
}

module.exports = { sumPrimesSieve };
