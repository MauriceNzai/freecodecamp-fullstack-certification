#!/usr/bin/env node

/**
 * Computes the Greatest Common Divisor using Euclidean Algorithm
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

/**
 * Computes the Least Common Multiple
 */
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

module.exports = { gcd, lcm };
