#!/usr/bin/node

const {
  generateBasic,
  generateWithRules,
  generateSecure,
} = require("./password-generator");

console.log("Basic:", generateBasic(10));
console.log("With Rules:", generateWithRules(12));
console.log("Secure:", generateSecure(16));
