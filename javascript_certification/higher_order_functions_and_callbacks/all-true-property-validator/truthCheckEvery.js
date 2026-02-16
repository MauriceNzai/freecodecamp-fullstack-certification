#!/usr/bin/env node

const { validateInputs } = require("./validators");

/**
 * Checks if all objects in the collection have a truthy value
 * for the given property.
 * @param {Object[]} collection
 * @param {string} prop
 * @returns {boolean}
 */
function truthCheckEvery(collection, prop) {
  validateInputs(collection, prop);

  return collection.every(obj => Boolean(obj[prop]));
}

module.exports = { truthCheckEvery };
