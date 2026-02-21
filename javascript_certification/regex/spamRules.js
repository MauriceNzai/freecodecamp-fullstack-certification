/**
 * spamRules.js
 * -------------------
 * Contains regex patterns to identify common spam indicators.
 * Each pattern checks for a specific type of spam content.
 *
 * Patterns included:
 *  - Begging phrases
 *  - Money-related messages
 *  - Free money offers
 *  - Stock alerts
 *  - "Dear friend" scams
 */

export const spamRules = [
  // Matches phrases like "please help" or "assist me"
  /\bplease help\b|\bassist me\b/i,

  // Matches numeric money mentions like "500 dollars", "2 thousand dollars", "$500", "USD 1000"
  /(?:\$|usd\s*)?[0-9]+(?:\s*(?:hundred|thousand|million|billion))?(?:\s*dollars|\$)?/i,

  // Matches obfuscated "free money" like "fr33 m0n3y"
  /\bfr[e3][e3]\s*m[o0]n[e3]y\b/i,

  // Matches stock alert phrases with obfuscation like "st0ck al3rt"
  /\b[s5][t7][o0][c{[(]k\s*[a@4]l[e3]r[t7]\b/i,

  // Matches "dear friend" with leetspeak variants
  /\bd[e3][a@4]r\s*fr[i1][e3]nd\b/i
];
