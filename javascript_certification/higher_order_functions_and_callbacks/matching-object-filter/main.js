#!/usr/bin/env node

const {matchWithLoop} = require("./matchWithLoop");
const {matchWithEvery} = require("./matchWithEvery");
const {matchDeep} = require("./matchDeep");

const collection = [
  { apple: 1, bat: 2 },
  { bat: 2 },
  { apple: 1, bat: 2, cookie: 2 },
  { apple: 1, bat: 2, meta: { organic: true } }
];

const source = { apple: 1, bat: 2 };
const deepSource = { apple: 1, bat: 2, meta: { organic: true } };

console.log("Loop:", matchWithLoop(collection, source));
console.log("Every:", matchWithEvery(collection, source));
console.log("Deep:", matchDeep(collection, deepSource));
