#!/usr/bin/node

const { pairElement } = require("./dnaPairGenerator");

console.log(pairElement("A")); 
console.log(pairElement("ATCG"));
console.log(pairElement("GCG", "functional"));
console.log(pairElement("TTAG", "conditional"));
