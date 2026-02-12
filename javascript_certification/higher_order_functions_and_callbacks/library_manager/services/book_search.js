/**
 * Returns books by author (case-insensitive)
 * @param {Array} catalog
 * @param {string} author
 * @returns {Array}
 */
function getBooksByAuthor(catalog, author) {
  if (!Array.isArray(catalog)) throw new TypeError("Catalog must be an array");
  if (typeof author !== "string") throw new TypeError("Author must be a string");

  const target = author.toLowerCase();

  return catalog.filter(
    book => book?.author?.toLowerCase().includes(target)
  );
}

module.exports = getBooksByAuthor;
