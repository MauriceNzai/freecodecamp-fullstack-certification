#!/usr/bin/node

const dropElements = require("./dropElements");

const data = [5, 6, 7, 4];

console.log(dropElements(data, n => n <= 3));
// []

console.log(dropElements(data, n => n >= 6));
// [6, 7, 4]

console.log(dropElements(data, n => n >= 7, "loop"));
// [7, 4]

console.log(dropElements(data, n => n >= 6, "while"));
// [6, 7, 4]
