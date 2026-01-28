#!/usr/bin/node

/**
 * Unique Sorted Union Module
 * --------------------------
 * Provides multiple approaches for combining arrays into a single array
 * containing unique values in their original order.
 *
 * Approaches:
 * 1. Nested Loop + includes()
 * 2. Higher-Order Functions (reduce + includes)
 * 3. Set-based Approach
 */

/* =========================
   Common Validation Helper
========================= */
function validateInputs(arrays) {
  if (arrays.length === 0) {
    throw new Error("At least one array is required.");
  }

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError("All arguments must be arrays.");
    }
  }
}

/* ======================================
   Approach 1: Nested Loop + includes()
   (Your Original Algorithm)
====================================== */
function uniteUniqueLoop(...arrays) {
  validateInputs(arrays);

  const result = [];

  for (const arr of arrays) {
    for (const value of arr) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }
  return result;
}

/*
Pros:
✔ Very explicit and readable
✔ Beginner-friendly
Cons:
✘ Slower for large datasets (O(n²))
*/

/* ======================================
   Approach 2: Higher-Order Functions
   reduce() + includes()
====================================== */
function uniteUniqueHOF(...arrays) {
  validateInputs(arrays);

  return arrays.reduce((acc, curr) => {
    curr.forEach(value => {
      if (!acc.includes(value)) {
        acc.push(value);
      }
    });
    return acc;
  }, []);
}

/*
Pros:
✔ Functional style
✔ Compact and expressive
Cons:
✘ Still O(n²)
✘ Slightly harder to debug
*/

/* ======================================
   Approach 3: Set-Based Approach
====================================== */
function uniteUniqueSet(...arrays) {
  validateInputs(arrays);

  const merged = arrays.flat();
  return [...new Set(merged)];
}

/*
Pros:
✔ Fast (near O(n))
✔ Very concise
Cons:
✘ Less explicit
✘ Requires understanding of Set
*/

/* =========================
   Module Exports
========================= */
module.exports = {
  uniteUniqueLoop,
  uniteUniqueHOF,
  uniteUniqueSet
};
