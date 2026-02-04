#!/usr/bin/node

/**
 * DNA Pair Generator
 * ------------------
 * Generates base-pair arrays for a given DNA strand.
 *
 * Supported bases:
 * A <-> T
 * C <-> G
 *
 * @param {string} str - DNA strand
 * @param {string} [strategy="lookup"] - Algorithm strategy
 * @returns {Array<Array<string>>}
 */
function pairElement(str, strategy = "lookup") {
  validateInput(str);

  switch (strategy) {
    case "lookup":
      return lookupStrategy(str);
    case "conditional":
      return conditionalStrategy(str);
    case "functional":
      return functionalStrategy(str);
    default:
      throw new Error("Invalid strategy selected.");
  }
}

/* ---------- STRATEGIES ---------- */

function lookupStrategy(str) {
  const map = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"]
  };

  const pairs = [];
  for (const char of str) {
    pairs.push(map[char]);
  }
  return pairs;
}

function conditionalStrategy(str) {
  const result = [];

  for (const char of str) {
    if (char === "A") result.push(["A", "T"]);
    else if (char === "T") result.push(["T", "A"]);
    else if (char === "C") result.push(["C", "G"]);
    else if (char === "G") result.push(["G", "C"]);
  }

  return result;
}

function functionalStrategy(str) {
  const lookup = { A: "T", T: "A", C: "G", G: "C" };

  return [...str].map(base => [base, lookup[base]]);
}

/* ---------- VALIDATION ---------- */

function validateInput(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string.");
  }

  if (str.length === 0) {
    throw new Error("Input string cannot be empty.");
  }

  if (!/^[ATCG]+$/i.test(str)) {
    throw new Error("DNA strand must contain only A, T, C, or G.");
  }
}

module.exports = { pairElement };
