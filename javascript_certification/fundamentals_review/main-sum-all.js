#!/usr/bin/node

const {
  sumAllLoop,
  sumAllFormula,
  sumAllReduce,
  sumAllRecursive
} = require("./sum-all");

const input = [10, 5];

console.log("Loop:", sumAllLoop(input));
console.log("Formula:", sumAllFormula(input));
console.log("Reduce:", sumAllReduce(input));
console.log("Recursive:", sumAllRecursive(input));
