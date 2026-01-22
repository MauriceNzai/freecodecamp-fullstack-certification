#!/usr/bin/node

const {
  findFirstLoop,
  findFirstFor,
  findFirstBuiltIn
} = require("./array-find-utils");

const numbers = [1, 3, 5, 8, 9, 10];

console.log(findFirstLoop(numbers, n => n % 2 === 0));
// → 8

console.log(findFirstFor(numbers, n => n % 2 === 0));
// → 8

console.log(findFirstBuiltIn(numbers, n => n % 2 === 0));
// → 8
