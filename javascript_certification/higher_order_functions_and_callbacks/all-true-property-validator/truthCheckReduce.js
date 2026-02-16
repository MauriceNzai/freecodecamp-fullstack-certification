#!/usr/bin/env node

const { validateInputs } = require("./validators");

/**
 * Functional approach using reduce.
 * @param {Object[]} collection
 * @param {string} prop
 * @returns {boolean}
 */
function truthCheckReduce(collection, prop) {
  validateInputs(collection, prop);

  return collection.reduce((acc, obj) => acc && Boolean(obj[prop]), true);
}

module.exports = { truthCheckReduce };
