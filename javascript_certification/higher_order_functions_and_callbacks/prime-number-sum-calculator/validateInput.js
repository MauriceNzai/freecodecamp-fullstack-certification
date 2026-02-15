#!/usr/bin/env node

/**
 * Validates input for prime summation functions.
 */

function validateInput(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new TypeError('Input must be a number');
  }

  if (!Number.isInteger(n)) {
    throw new TypeError('Input must be an integer');
  }

  if (n < 0) {
    throw new RangeError('Input must be >= 0');
  }
}

module.exports = { validateInput };
