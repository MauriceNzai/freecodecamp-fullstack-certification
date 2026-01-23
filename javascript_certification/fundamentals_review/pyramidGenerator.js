#!/usr/bin/node

/**
 * Pyramid Generator Utilities
 *
 * This module provides multiple implementations for generating
 * pyramid-shaped text patterns. Each approach demonstrates
 * a different programming style or trade-off.
 *
 * All functions return the pyramid as a string.
 */

/* ------------------------------------------------------------------
 * 1. Original implementation (loop-heavy, explicit logic)
 * ------------------------------------------------------------------
 */

/**
 * Generates a pyramid using explicit nested loops.
 * Closely mirrors the original beginner-friendly approach.
 *
 * Pros:
 * - Very explicit and easy to trace step-by-step
 * - Great for learning nested loops
 *
 * Cons:
 * - Some duplicated logic
 * - Harder to extend or refactor
 *
 * @param {string} char
 * @param {number} rows
 * @param {boolean} isVertexDownwards
 * @returns {string}
 */
function pyramidOriginal(char, rows, isVertexDownwards = false) {
  let result = "";

  for (let row = 0; row < rows; row++) {
    if (isVertexDownwards) {
      for (let col = 0; col < row; col++) result += " ";
      for (let col = row; col < rows; col++) result += char;
      for (let col = row; col < rows - 1; col++) result += char;
    } else {
      for (let col = row; col < rows; col++) result += " ";
      for (let col = 0; col < row; col++) result += char;
      for (let col = 0; col < row + 1; col++) result += char;
    }
    result += "\n";
  }

  return result;
}

/* ------------------------------------------------------------------
 * 2. Refactored implementation (intent-based, recommended)
 * ------------------------------------------------------------------
 */

/**
 * Generates a pyramid using calculated spacing and symbols.
 *
 * Pros:
 * - Clean and readable
 * - Minimal duplication
 * - Easy to extend (hollow, centered, etc.)
 *
 * Cons:
 * - Slightly more abstract for beginners
 *
 * @param {string} char
 * @param {number} rows
 * @param {boolean} isVertexDownwards
 * @returns {string}
 */
function pyramidRefactored(char, rows, isVertexDownwards = false) {
  if (rows <= 0) return "";

  let result = "";

  for (let row = 0; row < rows; row++) {
    const spaces = isVertexDownwards ? row : rows - row;
    const symbols = isVertexDownwards
      ? (rows - row) * 2 - 1
      : row * 2 + 1;

    result += " ".repeat(spaces);
    result += char.repeat(symbols);
    result += "\n";
  }

  return result;
}

/* ------------------------------------------------------------------
 * 3. Functional-style implementation (Array.from + map)
 * ------------------------------------------------------------------
 */

/**
 * Generates a pyramid using functional array methods.
 *
 * Pros:
 * - Declarative and concise
 * - No explicit loops
 *
 * Cons:
 * - Less intuitive for beginners
 * - Slight overhead from array creation
 *
 * @param {string} char
 * @param {number} rows
 * @param {boolean} isVertexDownwards
 * @returns {string}
 */
function pyramidFunctional(char, rows, isVertexDownwards = false) {
  return Array.from({ length: rows }, (_, row) => {
    const spaces = isVertexDownwards ? row : rows - row;
    const symbols = isVertexDownwards
      ? (rows - row) * 2 - 1
      : row * 2 + 1;

    return " ".repeat(spaces) + char.repeat(symbols);
  }).join("\n") + "\n";
}

/* ------------------------------------------------------------------
 * 4. Math-focused implementation (minimal variables)
 * ------------------------------------------------------------------
 */

/**
 * Generates a pyramid using inline mathematical expressions.
 *
 * Pros:
 * - Compact
 * - Highlights pattern math clearly
 *
 * Cons:
 * - Harder to read
 * - Least beginner-friendly
 *
 * @param {string} char
 * @param {number} rows
 * @param {boolean} isVertexDownwards
 * @returns {string}
 */
function pyramidMath(char, rows, isVertexDownwards = false) {
  let result = "";

  for (let i = 0; i < rows; i++) {
    result += " ".repeat(isVertexDownwards ? i : rows - i);
    result += char.repeat(
      isVertexDownwards ? (rows - i) * 2 - 1 : i * 2 + 1
    );
    result += "\n";
  }

  return result;
}

/* ------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------
 */

module.exports = {
  pyramidOriginal,
  pyramidRefactored,
  pyramidFunctional,
  pyramidMath
};
