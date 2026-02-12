/**
 * Returns total number of pages in the catalog
 * @param {Array} catalog
 * @returns {number}
 */
function getTotalPages(catalog) {
  if (!Array.isArray(catalog)) throw new TypeError("Catalog must be an array");

  return catalog.reduce((total, book) => {
    return total + (typeof book?.pages === "number" ? book.pages : 0);
  }, 0);
}

module.exports = getTotalPages;
