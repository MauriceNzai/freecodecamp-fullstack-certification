/**
 * animals.js
 * -----------
 * This module defines and exports animal objects used in the Wildlife Tracker.
 * It represents the data layer of the application.
 *
 * NOTE:
 * - Objects are intentionally simple for learning purposes.
 * - These objects may be mutated by some operations (see operations.js).
 */

/**
 * Represents a tiger.
 * @type {{species: string, age: number, isEndangered: boolean}}
 */
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

/**
 * Represents an elephant.
 * @type {{species: string, age: number, isEndangered: boolean}}
 */
const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

// Export animal data for use in other modules
module.exports = { tiger, elephant };
