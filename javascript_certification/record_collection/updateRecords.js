#!/usr/bin/node

/**
 * Updates a record collection following specific rules:
 * - If `value` is an empty string, the given property is deleted.
 * - If `prop` is not "tracks" and `value` is non-empty, the property is set/updated.
 * - If `prop` is "tracks" and `value` is non-empty:
 *   - Initializes the tracks array if it does not exist
 *   - Appends the value to the tracks array
 *
 * @param {Object} records - The record collection object
 * @param {number} id - The album ID to update
 * @param {string} prop - The property to update
 * @param {string} value - The value to assign
 * @returns {Object} The updated record collection
 */
const updateRecords = (records, id, prop, value) => {
  // Guard clause: return unchanged records if album does not exist
  if (!records[id]) return records;

  // Delete property if value is an empty string
  if (value === "") {
    delete records[id][prop];
    return records;
  }

  // Handle non-track properties
  if (prop !== "tracks") {
    records[id][prop] = value;
    return records;
  }

  // Handle track updates using logical OR assignment
  records[id].tracks ||= [];
  records[id].tracks.push(value);

  return records;
};

module.exports = updateRecords;
