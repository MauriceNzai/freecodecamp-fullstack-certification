/**
 * @file sorters.mjs
 * @description Sorting utilities for books
 */

/**
 * Sorts books by release year (ascending)
 * @param {Array<Object>} books
 * @returns {Array<Object>} Sorted books
 */
export function sortByYearAsc(books) {
  if (!Array.isArray(books)) {
    throw new TypeError("books must be an array");
  }

  return [...books].sort((a, b) => a.releaseYear - b.releaseYear);
}
