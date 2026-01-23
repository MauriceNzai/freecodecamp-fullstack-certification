#!/usr/bin/node

const {
  pyramidOriginal,
  pyramidRefactored,
  pyramidFunctional,
  pyramidMath
} = require("./pyramid-utils");

console.log(pyramidOriginal("o", 4));
console.log(pyramidRefactored("o", 4));
console.log(pyramidFunctional("o", 5, true));
console.log(pyramidMath("o", 3));
