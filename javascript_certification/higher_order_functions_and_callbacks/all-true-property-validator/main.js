#!/usr/bin/env node

const { truthCheckEvery } = require("./truthCheckEvery");
const { truthCheckLoop } = require("./truthCheckLoop");
const { truthCheckReduce } = require("./truthCheckReduce");

const users = [
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true }
];

console.log("every():", truthCheckEvery(users, "isBot"));
console.log("loop():", truthCheckLoop(users, "isBot"));
console.log("reduce():", truthCheckReduce(users, "isBot"));
