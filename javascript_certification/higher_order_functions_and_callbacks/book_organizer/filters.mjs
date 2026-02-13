/**
 * @file filters.mjs
 * @description Filtering utilities for books
 */

/**
 * Filters books released before a given year.
 * @param {Array<Object>} books - List of books
 * @param {number} year - Upper year limit
 * @returns {Array<Object>} Filtered books
 */
export function filterBeforeYear(books, year) {
  if (!Array.isArray(books)) {
    throw new TypeError("books must be an array");
  }

  return books.filter(book => {
    if (typeof book.releaseYear !== "number") return false;
    return book.releaseYear < year;
  });
}
