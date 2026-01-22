#!/usr/bin/node

const {
  reverseUsingStack,
  reverseUsingLoop,
  reverseUsingBuiltIns
} = require("./stringUtils");

const input = "hello";

console.log("Stack-based:", reverseUsingStack(input));
console.log("Loop-based:", reverseUsingLoop(input));
console.log("Built-ins:", reverseUsingBuiltIns(input));
