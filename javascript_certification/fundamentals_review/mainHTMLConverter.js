#!/usr/bin/node

const {
  convertHTML_ArrayLoop,
  convertHTML_Map,
  convertHTML_Regex
} = require("./htmlEntityConverter");

const input = "Dolce & Gabbana <script>alert('XSS')</script>";

console.log("Array Loop:", convertHTML_ArrayLoop(input));
console.log("Map:", convertHTML_Map(input));
console.log("Regex:", convertHTML_Regex(input));
