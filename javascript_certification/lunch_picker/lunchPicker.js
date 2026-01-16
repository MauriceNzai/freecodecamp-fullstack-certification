#!/usr/bin/node
/**
 * Lunch Picker Module
 * -------------------
 * A small utility module for managing a lunch menu.
 * Supports adding, removing, displaying, and randomly selecting lunches.
 *
 * This module is intentionally state-agnostic: all functions operate
 * on the array passed to them, making it reusable and testable.
 */

/**
 * Adds a lunch item to the end of the menu.
 *
 * @param {string[]} lunchMenu - The current lunch menu
 * @param {string} lunch - Lunch item to add
 * @returns {string[]} Updated lunch menu
 */
function addLunchToEnd(lunchMenu, lunch) {
  lunchMenu.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return lunchMenu;
}

/**
 * Adds a lunch item to the beginning of the menu.
 *
 * @param {string[]} lunchMenu - The current lunch menu
 * @param {string} lunch - Lunch item to add
 * @returns {string[]} Updated lunch menu
 */
function addLunchToStart(lunchMenu, lunch) {
  lunchMenu.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return lunchMenu;
}

/**
 * Removes the last lunch item from the menu.
 *
 * @param {string[]} lunchMenu - The current lunch menu
 * @returns {string[]} Updated lunch menu
 */
function removeLastLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches to remove.");
    return lunchMenu;
  }

  const lastItem = lunchMenu.pop();
  console.log(`${lastItem} removed from the end of the lunch menu.`);
  return lunchMenu;
}

/**
 * Removes the first lunch item from the menu.
 *
 * @param {string[]} lunchMenu - The current lunch menu
 * @returns {string[]} Updated lunch menu
 */
function removeFirstLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches to remove.");
    return lunchMenu;
  }

  const firstItem = lunchMenu.shift();
  console.log(`${firstItem} removed from the start of the lunch menu.`);
  return lunchMenu;
}

/**
 * Randomly selects and displays a lunch item.
 *
 * @param {string[]} lunchMenu - The current lunch menu
 */
function getRandomLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * lunchMenu.length);
  const selectedLunch = lunchMenu[randomIndex];
  console.log(`Randomly selected lunch: ${selectedLunch}`);
}

/**
 * Displays all lunch items in the menu.
 *
 * @param {string[]} lunchMenu - The current lunch menu
 */
function showLunchMenu(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${lunchMenu.join(", ")}`);
}

module.exports = {
  addLunchToEnd,
  addLunchToStart,
  removeLastLunch,
  removeFirstLunch,
  getRandomLunch,
  showLunchMenu
};
