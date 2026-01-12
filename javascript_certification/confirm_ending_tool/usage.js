#!/usr/bin/node

const {
	confirmEndingEndsWith,
	confirmEndingSlice,
	confirmEndingIndexOf,
	confirmEndingManual
} = require("./confirmEnding");

// --------------------
// Example Usage
// --------------------

console.log(confirmEndingEndsWith("Connor", "n")); // true
console.log(confirmEndingSlice("Connor", "n")); // true
console.log(confirmEndingIndexOf("Connor", "n")); // true
console.log(confirmEndingManual("Connor", "n")); // true

console.log(confirmEndingSlice("banana", "nan")); // false
console.log(confirmEndingIndexOf("banana", "nan")); // false
console.log(confirmEndingManual("banana", "nan")); // false

console.log(
  confirmEndingManual(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
); // false
