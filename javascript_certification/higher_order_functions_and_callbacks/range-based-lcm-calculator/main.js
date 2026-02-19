#!/usr/bin/env node

const smallestCommons = require("./smallestCommons");

console.log(smallestCommons([1, 5]));  // 60
console.log(smallestCommons([5, 1]));  // 60
console.log(smallestCommons([2, 10])); // 2520
