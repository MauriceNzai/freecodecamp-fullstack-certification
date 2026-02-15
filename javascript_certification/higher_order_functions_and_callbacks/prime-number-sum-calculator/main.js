#!/usr/bin/env node

const { sumPrimesBrute } = require('./sumPrimesBrute');
const { sumPrimesOptimized } = require('./sumPrimesOptimized');
const { sumPrimesSieve } = require('./sumPrimesSieve');

const n = 100;

console.log(`Brute Force: ${sumPrimesBrute(n)}`);
console.log(`Optimized:   ${sumPrimesOptimized(n)}`);
console.log(`Sieve:       ${sumPrimesSieve(n)}`);
