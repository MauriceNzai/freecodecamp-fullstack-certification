#!/usr/bin/node

/**
 * HTML Entity Converter Module
 * --------------------------------
 * Converts special characters into their corresponding HTML entities.
 *
 * Supported characters:
 * &  <  >  "  '
 */

/**
 * Shared validation function
 */
function validateInput(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
}

/**
 * Approach 1: Array + For Loop
 */
function convertHTML_ArrayLoop(str) {
  validateInput(str);

  const chars = str.split("");
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  for (let i = 0; i < chars.length; i++) {
    if (map[chars[i]]) {
      chars[i] = map[chars[i]];
    }
  }

  return chars.join("");
}

/**
 * Approach 2: Array + map()
 */
function convertHTML_Map(str) {
  validateInput(str);

  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str
    .split("")
    .map(char => map[char] || char)
    .join("");
}

/**
 * Approach 3: Regex Replacement
 */
function convertHTML_Regex(str) {
  validateInput(str);

  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/[&<>"']/g, match => map[match]);
}

module.exports = {
  convertHTML_ArrayLoop,
  convertHTML_Map,
  convertHTML_Regex
};
