#!/usr/bin/node

/**
 * @fileoverview
 * Example usage of the fearNotLetter utility module.
 */

const {
  fearNotLetter,
  fearNotLetterByRangeGeneration,
  fearNotLetterByReduce,
  fearNotLetterByAlphabetLookup,
  fearNotLetterRecursive
} = require("./fearNotLetter");

// Test cases
const testCases = [
  "abce",
  "mnopqs",
  "stvwx",
  "abcdefghijklmnopqrstuvwxyz"
];

console.log("=== fearNotLetter Module Demo ===\n");

for (const test of testCases) {
  console.log(`Input: "${test}"`);
  console.log("Primary implementation:", fearNotLetter(test));
  console.log("Range generation:", fearNotLetterByRangeGeneration(test));
  console.log("Reduce approach:", fearNotLetterByReduce(test));
  console.log("Alphabet lookup:", fearNotLetterByAlphabetLookup(test));
  console.log("Recursive approach:", fearNotLetterRecursive(test));
  console.log("----------------------------------");
}
