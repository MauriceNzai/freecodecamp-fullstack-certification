#!/usr/bin/node

/**
 * Inventory Management Utilities (Array-Based)
 *
 * This module provides two approaches for managing inventory
 * stored as an array of objects:
 *
 * 1. Array + Linear Search (explicit loops)
 * 2. Array + Higher-Order Functions (find, findIndex)
 *
 * Inventory format:
 * [
 *   { name: "flour", quantity: 10 },
 *   { name: "sugar", quantity: 5 }
 * ]
 */

/* ======================================================
   SHARED VALIDATION HELPERS
====================================================== */

/**
 * Normalize product name
 * @param {string} name
 * @returns {string}
 */
function normalizeName(name) {
  return String(name).toLowerCase();
}

/**
 * Validate quantity
 * @param {number} quantity
 * @returns {boolean}
 */
function isValidQuantity(quantity) {
  return typeof quantity === "number" && quantity > 0;
}

/* ======================================================
   APPROACH 1: ARRAY + LINEAR SEARCH
====================================================== */

/**
 * Find product index using a manual loop (O(n))
 * @param {Array} inventory
 * @param {string} name
 * @returns {number}
 */
function findProductIndexLinear(inventory, name) {
  name = normalizeName(name);

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }
  return -1;
}

/**
 * Add product using linear search
 * @param {Array} inventory
 * @param {string} name
 * @param {number} quantity
 */
function addProductLinear(inventory, name, quantity) {
  if (!Array.isArray(inventory) || !isValidQuantity(quantity)) return;

  name = normalizeName(name);
  const index = findProductIndexLinear(inventory, name);

  if (index >= 0) {
    inventory[index].quantity += quantity;
  } else {
    inventory.push({ name, quantity });
  }
}

/**
 * Remove product using linear search
 * @param {Array} inventory
 * @param {string} name
 * @param {number} quantity
 */
function removeProductLinear(inventory, name, quantity) {
  if (!Array.isArray(inventory) || !isValidQuantity(quantity)) return;

  name = normalizeName(name);
  const index = findProductIndexLinear(inventory, name);

  if (index < 0) return;

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity <= 0) {
    inventory.splice(index, 1);
  }
}

/* ======================================================
   APPROACH 2: ARRAY + HIGHER-ORDER FUNCTIONS
====================================================== */

/**
 * Add product using Array.find (O(n))
 * @param {Array} inventory
 * @param {string} name
 * @param {number} quantity
 */
function addProductHOF(inventory, name, quantity) {
  if (!Array.isArray(inventory) || !isValidQuantity(quantity)) return;

  name = normalizeName(name);
  const product = inventory.find(item => item.name === name);

  if (product) {
    product.quantity += quantity;
  } else {
    inventory.push({ name, quantity });
  }
}

/**
 * Remove product using Array.findIndex (O(n))
 * @param {Array} inventory
 * @param {string} name
 * @param {number} quantity
 */
function removeProductHOF(inventory, name, quantity) {
  if (!Array.isArray(inventory) || !isValidQuantity(quantity)) return;

  name = normalizeName(name);
  const index = inventory.findIndex(item => item.name === name);

  if (index === -1) return;

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity <= 0) {
    inventory.splice(index, 1);
  }
}

/* ======================================================
   EXPORTS
====================================================== */

module.exports = {
  // Linear Search approach
  findProductIndexLinear,
  addProductLinear,
  removeProductLinear,

  // Higher-Order Functions approach
  addProductHOF,
  removeProductHOF
};
