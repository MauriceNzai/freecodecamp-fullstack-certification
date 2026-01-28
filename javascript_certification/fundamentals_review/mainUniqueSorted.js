#!/usr/bin/node

const {
  uniteUniqueLoop,
  uniteUniqueHOF,
  uniteUniqueSet
} = require("./uniqueSortedUnion");

const arr1 = [1, 3, 2];
const arr2 = [5, 2, 1, 4];
const arr3 = [2, 1];

console.log("Loop Approach:");
console.log(uniteUniqueLoop(arr1, arr2, arr3));

console.log("\nHigher-Order Function Approach:");
console.log(uniteUniqueHOF(arr1, arr2, arr3));

console.log("\nSet-Based Approach:");
console.log(uniteUniqueSet(arr1, arr2, arr3));
