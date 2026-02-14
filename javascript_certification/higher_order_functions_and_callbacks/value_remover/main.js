#!/usr/bin/env node

const { destroyer: remove1 } = require('./value_remover_backwards');
const { destroyer: remove2 } = require('./value_remover_filter');
const { destroyer: remove3 } = require('./value_remover_set');

const examples = [
  [1, 2, 3, 1, 2, 3],
  [3, 5, 1, 2, 2],
  [2, 3, 2, 3],
];

console.log('--- Backwards Approach ---');
examples.forEach(arr => console.log(remove1(arr, 2, 3)));

console.log('--- Filter Approach ---');
examples.forEach(arr => console.log(remove2(arr, 2, 3)));

console.log('--- Set Approach ---');
examples.forEach(arr => console.log(remove3(arr, 2, 3)));
