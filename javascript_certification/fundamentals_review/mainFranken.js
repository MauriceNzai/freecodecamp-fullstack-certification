#!/usr/bin/node
const { frankenSplice, frankenSpliceInline, frankenSpliceWithSplice } = require('./array-utils');

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

console.log('frankenSplice:', frankenSplice(arr1, arr2, 1));
console.log('frankenSpliceInline:', frankenSpliceInline(arr1, arr2, 1));
console.log('frankenSpliceWithSplice:', frankenSpliceWithSplice(arr1, arr2, 1));
