#!/usr/bin/env node

const flattenRecursive = require("./flattenRecursive");
const flattenIterative = require("./flattenIterative");
const flattenReduce = require("./flattenReduce");

const data = [1, [2, [3, 4]], 5];

console.log("Recursive:", flattenRecursive(data));
console.log("Iterative:", flattenIterative(data));
console.log("Reduce:", flattenReduce(data));
