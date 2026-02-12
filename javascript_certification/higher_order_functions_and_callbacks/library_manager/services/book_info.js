/**
 * Returns formatted list of books
 * @param {Array} catalog
 * @returns {string}
 */
function getBookInformation(catalog) {
  if (!Array.isArray(catalog)) {
    throw new TypeError("Catalog must be an array");
  }

  return catalog
    .filter(book => book?.title && book?.author)
    .map(book => `${book.title} by ${book.author}`)
    .join("\n");
}

module.exports = getBookInformation;
