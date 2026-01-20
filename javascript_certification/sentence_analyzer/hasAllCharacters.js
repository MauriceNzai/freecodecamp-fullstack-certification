#!/usr/bin/node

/**
 * Checks whether all characters in the second string
 * exist in the first string (case-insensitive).
 *
 * @param {[string, string]} strings - An array containing two strings.
 * @returns {boolean} True if all characters exist, otherwise false.
 */
function hasAllCharacters(strings) {
  const [source, target] = strings;
  const normalizedSource = source.toLowerCase();

  return target
    .toLowerCase()
    .split("")
    .every(char => normalizedSource.includes(char));
}

module.exports = {
	hasAllCharacters,
}
