#!/usr/bin/node

/**
 * Extracts normalized words from a sentence.
 * Removes punctuation and extra spaces.
 *
 * @param {string} sentence - The input sentence
 * @returns {string[]} Array of cleaned words
 */
function extractWords(sentence) {
  return sentence
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .split(/\s+/)            // handle multiple spaces
    .filter(Boolean);        // remove empty strings
}


/**
 * Returns the length of the longest word in a sentence.
 *
 * @param {string} sentence - The input sentence
 * @returns {number} Length of the longest word
 */
function getLongestWordLength(sentence) {
  const words = extractWords(sentence);
  let maxWordLength = 0;

  for (const currentWord of words) {
    if (currentWord.length > maxWordLength) {
      maxWordLength = currentWord.length;
    }
  }

  return maxWordLength;
}


/**
 * Returns the length of the shortest word in a sentence.
 *
 * @param {string} sentence - The input sentence
 * @returns {number} Length of the shortest word
 */
function getShortestWordLength(sentence) {
  const words = extractWords(sentence);

  if (words.length === 0) return 0;

  let minWordLength = words[0].length;

  for (const currentWord of words) {
    if (currentWord.length < minWordLength) {
      minWordLength = currentWord.length;
    }
  }

  return minWordLength;
}

module.exports = {
	extractWords,
	getLongestWordLength,
	getShortestWordLength
}
