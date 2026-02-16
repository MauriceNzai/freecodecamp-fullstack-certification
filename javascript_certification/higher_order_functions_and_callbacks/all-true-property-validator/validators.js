#!/usr/bin/env node

/**
 * Validates inputs for truth-check functions.
 * @param {any} collection
 * @param {any} prop
 */
function validateInputs(collection, prop) {
  if (!Array.isArray(collection)) {
    throw new TypeError("collection must be an array");
  }

  if (collection.length === 0) {
    throw new Error("collection must not be empty");
  }

  if (typeof prop !== "string" || prop.trim() === "") {
    throw new TypeError("prop must be a non-empty string");
  }

  collection.forEach((item, index) => {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      throw new TypeError(`collection[${index}] must be a plain object`);
    }
  });
}

module.exports = { validateInputs };
