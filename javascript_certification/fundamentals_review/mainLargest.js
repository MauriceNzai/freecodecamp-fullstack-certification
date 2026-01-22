#!/usr/bin/node

const {
  largestOfAll,
  largestOfAllUsingMathMax,
  largestOfAllUsingReduce
} = require("./array-utils");

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [-10, -3, -7],
  [100, 20]
];

console.log("Loop implementation:");
console.log(largestOfAll(data));

console.log("\nMath.max implementation:");
console.log(largestOfAllUsingMathMax(data));

console.log("\nReduce implementation:");
console.log(largestOfAllUsingReduce(data));
