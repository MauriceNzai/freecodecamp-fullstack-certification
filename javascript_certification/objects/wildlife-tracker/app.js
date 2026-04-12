#!/usr/bin/env node

/**
 * app.js
 * -------
 * Entry point of the Wildlife Tracker application.
 *
 * مسؤولياته (Responsibilities):
 * - Import data and operations
 * - Execute functions
 * - Display output to the console
 *
 * NOTE:
 * - No business logic should be written here
 * - This file only coordinates execution
 */

const { tiger, elephant } = require("./animals");
const ops = require("./operations");

// =========================
// ORIGINAL FUNCTION USAGE
// =========================

console.log("=== ORIGINAL FUNCTIONS ===");

// Retrieve basic properties
console.log(ops.getSpecies(tiger));
console.log(ops.getAge(tiger));

// Mutating operations (modify original objects)
console.log(ops.addHabitat(tiger, "Rainforest"));
console.log(ops.updateAge(elephant, 12));
console.log(ops.removeEndangeredStatus(tiger));

// Property checks
console.log(ops.hasHabitat(tiger));
console.log(ops.hasHabitat(elephant));

// Generic property access
console.log(ops.getProperty(tiger, "species"));
console.log(ops.getProperty(elephant, "age"));


// =========================
// ALTERNATIVE APPROACHES
// =========================

console.log("\n=== ALTERNATIVE APPROACHES ===");

// Using destructuring-based getter
console.log(ops.getSpeciesAlt(tiger));

// Immutable operations (do NOT modify original objects)
console.log(ops.addHabitatAlt(tiger, "Savannah"));
console.log(ops.updateAgeAlt(elephant, 15));
console.log(ops.removeEndangeredStatusAlt(tiger));

// Safer property check
console.log(ops.hasHabitatAlt(tiger));
