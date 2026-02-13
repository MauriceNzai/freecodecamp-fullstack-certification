#!/usr/bin/env node

/**
 * @file main.js
 * @description Entry point for Book Organizer demo
 */

import { books } from "./data.mjs";
import { filterBeforeYear } from "./filters.mjs";
import { sortByYearAsc } from "./sorters.mjs";

try {
  const filtered = filterBeforeYear(books, 2002);
  const sorted = sortByYearAsc(filtered);

  console.log("Filtered & Sorted Books:");
  console.table(sorted);
} catch (error) {
  console.error("Error:", error.message);
}
