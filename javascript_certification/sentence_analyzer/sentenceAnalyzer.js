#!/usr/bin/node

/**
 * Counts how many characters from a given set appear in a sentence.
 *
 * @param {string} sentence - The sentence to analyze.
 * @param {string} characters - A string containing characters to count.
 * @returns {number} The total number of matching characters found.
 */
function countCharacters(sentence, characters) {
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (characters.includes(char)) {
      count++;
    }
  }
  return count;
}

/**
 * Counts the number of vowels in a sentence.
 *
 * @param {string} sentence - The sentence to analyze.
 * @returns {number} The total number of vowels found.
 */
function getVowelCount(sentence) {
  return countCharacters(sentence, "aeiou");
}

/**
 * Counts the number of consonants in a sentence.
 *
 * @param {string} sentence - The sentence to analyze.
 * @returns {number} The total number of consonants found.
 */
function getConsonantCount(sentence) {
  return countCharacters(sentence, "bcdfghjklmnpqrstvwxyz");
}

/**
 * Counts the number of punctuation marks in a sentence.
 *
 * @param {string} sentence - The sentence to analyze.
 * @returns {number} The total number of punctuation marks found.
 */
function getPunctuationCount(sentence) {
  const matches = sentence.match(/[.,!?;:\-()[\]{}"'–]/g);
  return matches ? matches.length : 0;
}

/**
 * Counts the number of words in a sentence.
 *
 * @param {string} sentence - The sentence to analyze.
 * @returns {number} The total number of words found.
 */
function getWordCount(sentence) {
  const words = sentence.trim().match(/\b\w+\b/g);
  return words ? words.length : 0;
}

/**
 * Analyzes a sentence and returns a summary of its contents.
 *
 * @param {string} sentence - The sentence to analyze.
 * @returns {Object} An object containing vowel, consonant, punctuation, and word counts.
 */
function analyzeSentence(sentence) {
  return {
    vowels: getVowelCount(sentence),
    consonants: getConsonantCount(sentence),
    punctuation: getPunctuationCount(sentence),
    words: getWordCount(sentence)
  };
}

module.exports = {
  getVowelCount,
  getConsonantCount,
  getPunctuationCount,
  getWordCount,
  analyzeSentence
};
