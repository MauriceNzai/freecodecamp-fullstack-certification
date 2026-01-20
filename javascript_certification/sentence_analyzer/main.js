#!/usr/bin/node

const { analyzeSentence } = require("./sentenceAnalyzer");

const sentence = "Apples are tasty fruits!!!";

const result = analyzeSentence(sentence);

console.log("Sentence Analysis:");
console.log(result);
