#!/usr/bin/node

const {
  removeFalsyBoolean,
  removeFalsyDoubleNegation,
  removeFalsyLoop,
  removeFalsyReduce,
  removeFalsyExplicit
} = require("./falsyRemover");

const data = [7, "ate", "", false, 0, NaN, null, undefined, 9];

console.log("Original:", data);

console.log("Boolean:", removeFalsyBoolean(data));
console.log("Double Negation:", removeFalsyDoubleNegation(data));
console.log("Loop:", removeFalsyLoop(data));
console.log("Reduce:", removeFalsyReduce(data));
console.log("Explicit:", removeFalsyExplicit(data));
