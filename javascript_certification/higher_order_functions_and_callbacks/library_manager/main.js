#!/usr/bin/node

const library = require("./data/library");
const getBookInformation = require("./services/book_info");
const getBookSummaries = require("./services/book_summaries");
const getBooksByAuthor = require("./services/book_search");
const getTotalPages = require("./services/book_stats");

console.log("Books in the Library:\n");
console.log(getBookInformation(library));

console.log("\nBook Summaries:\n");
console.log(getBookSummaries(library));

console.log("\nBooks by Arvid Kahl:\n");
console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nBooks by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal Pages in Library:\n");
console.log(getTotalPages(library));
