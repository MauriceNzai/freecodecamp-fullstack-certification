#!/usr/bin/env node

const { getIndexToInsertLinear } = require("./linearIndexFinder");
const { getIndexToInsertBinary } = require("./binaryIndexFinder");

const tests = [
  [[1, 2, 3, 4], 1.5],
  [[20, 3, 5], 19],
  [[10, 20, 30, 40, 50], 30],
  [[3, 10, 5], 11],
];

for (const [arr, num] of tests) {
  console.log(`Linear: Insert ${num} into [${arr}] → index ${getIndexToInsertLinear(arr, num)}`);
  console.log(`Binary: Insert ${num} into [${arr}] → index ${getIndexToInsertBinary(arr, num)}`);
  console.log("-----");
}
