#!/usr/bin/env node

const { validateInputs } = require("./validators");

/**
 * Imperative version using a for loop.
 * @param {Object[]} collection
 * @param {string} prop
 * @returns {boolean}
 */
function truthCheckLoop(collection, prop) {
  validateInputs(collection, prop);

  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][prop]) {
      return false;
    }
  }

  return true;
}

module.exports = { truthCheckLoop };
