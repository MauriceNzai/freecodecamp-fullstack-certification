/**
 * isSpam.js
 * -------------------
 * Exports the `isSpam` function which checks whether a given message
 * matches any of the defined spam rules.
 */

import { spamRules } from "./spamRules.js";

/**
 * Checks if a message contains spam based on predefined rules
 * @param {string} message - Message to check for spam
 * @returns {boolean} - True if message is spam, false otherwise
 */
export function isSpam(message) {
  // Ensure input is a string
  if (typeof message !== "string") return false;

  // Check if any regex matches the message
  return spamRules.some((regex) => regex.test(message));
}
