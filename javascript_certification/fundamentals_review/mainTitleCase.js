#!/usr/bin/node

const {
  titleCaseLoop,
  titleCaseMap,
  titleCaseRegex,
  titleCaseCharArray
} = require("./titleCaseConverter");

const input = "   hello   world from   JAVASCRIPT  ";

console.log("Loop:", titleCaseLoop(input));
console.log("Map:", titleCaseMap(input));
console.log("Regex:", titleCaseRegex(input));
console.log("Char Array:", titleCaseCharArray(input));
