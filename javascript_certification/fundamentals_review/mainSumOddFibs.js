#!/usr/bin/node

const {
  sumFibsIterative,
  sumFibsRecursive,
  sumFibsOptimized
} = require('./sumOddFibs');

const limit = 1000;

console.log('Iterative:', sumFibsIterative(limit));
console.log('Recursive:', sumFibsRecursive(limit));
console.log('Optimized:', sumFibsOptimized(limit));
