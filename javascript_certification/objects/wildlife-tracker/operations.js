/**
 * operations.js
 * --------------
 * This module contains all business logic for manipulating animal objects.
 *
 * It demonstrates:
 * - Object property access
 * - Mutation vs immutability
 * - Different approaches to solving the same problem
 *
 * Each function includes:
 * - Documentation
 * - Alternative implementations
 * - Pros & Cons (for learning purposes)
 */

// =========================
// 1. Get Species
// =========================

/**
 * Retrieves the species of an animal.
 * @param {Object} animal - The animal object
 * @returns {string} species
 */
const getSpecies = (animal) => animal.species;

/**
 * Alternative: Uses object destructuring
 * @param {Object} animal
 * @returns {string}
 */
const getSpeciesAlt = ({ species }) => species;

// =========================
// 2. Get Age
// =========================

/**
 * Retrieves the age of an animal.
 * @param {Object} animal
 * @returns {number}
 */
const getAge = (animal) => animal.age;

/**
 * Generic property getter
 * @param {Object} animal
 * @param {string} propertyName
 * @returns {*}
 */
const getProperty = (animal, propertyName) => animal[propertyName];


// =========================
// 3. Add Habitat
// =========================

/**
 * Adds a habitat property to the animal (MUTATES original object)
 * @param {Object} animal
 * @param {string} habitat
 * @returns {Object} Updated animal
 */
const addHabitat = (animal, habitat) => {
  // Direct mutation of object
  animal.habitat = habitat;
  return animal;
};

/**
 * Adds habitat without mutating original object (IMMUTABLE)
 * @param {Object} animal
 * @param {string} habitat
 * @returns {Object} New animal object
 */
const addHabitatAlt = (animal, habitat) => ({
  ...animal,      // Copy existing properties
  habitat         // Add/overwrite habitat
});


// =========================
// 4. Update Age
// =========================

/**
 * Updates age (MUTATES original object)
 * @param {Object} animal
 * @param {number} newAge
 * @returns {Object}
 */
const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

/**
 * Updates age immutably
 * @param {Object} animal
 * @param {number} newAge
 * @returns {Object}
 */
const updateAgeAlt = (animal, newAge) => ({
  ...animal,
  age: newAge
});


// =========================
// 5. Remove Endangered Status
// =========================

/**
 * Removes the isEndangered property (MUTATES original object)
 * @param {Object} animal
 * @returns {Object}
 */
const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

/**
 * Removes property immutably using destructuring
 * @param {Object} animal
 * @returns {Object}
 */
const removeEndangeredStatusAlt = (animal) => {
  const { isEndangered, ...rest } = animal; // Extract and discard
  return rest;
};


// =========================
// 6. Check Habitat Property
// =========================

/**
 * Checks if habitat exists (legacy approach)
 * @param {Object} animal
 * @returns {boolean}
 */
const hasHabitat = (animal) => animal.hasOwnProperty("habitat");

/**
 * Safer modern alternative
 * @param {Object} animal
 * @returns {boolean}
 */
const hasHabitatAlt = (animal) => Object.hasOwn(animal, "habitat");


// =========================
// Module Exports
// =========================

module.exports = {
  getSpecies,
  getSpeciesAlt,
  getAge,
  getProperty,
  addHabitat,
  addHabitatAlt,
  updateAge,
  updateAgeAlt,
  removeEndangeredStatus,
  removeEndangeredStatusAlt,
  hasHabitat,
  hasHabitatAlt
};
