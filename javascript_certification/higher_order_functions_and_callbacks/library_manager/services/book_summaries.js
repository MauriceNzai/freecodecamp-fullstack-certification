/**
 * Returns all book summaries
 * @param {Array} catalog
 * @returns {string}
 */
function getBookSummaries(catalog) {
  if (!Array.isArray(catalog)) {
    throw new TypeError("Catalog must be an array");
  }

  return catalog
    .filter(book => book?.about)
    .map(book => book.about)
    .join("\n");
}

module.exports = getBookSummaries;
