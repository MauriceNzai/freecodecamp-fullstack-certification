#!/usr/bin/node
/**
 * Lunch Picker Demo
 * -----------------
 * Demonstrates usage of the Lunch Picker module.
 */

const {
  addLunchToEnd,
  addLunchToStart,
  removeLastLunch,
  removeFirstLunch,
  getRandomLunch,
  showLunchMenu
} = require("./lunchPicker");

const lunches = [];

addLunchToEnd(lunches, "Rice & Beans");
addLunchToEnd(lunches, "Chicken Stew");
addLunchToStart(lunches, "Chapati & Ndengu");

showLunchMenu(lunches);

getRandomLunch(lunches);

removeFirstLunch(lunches);
removeLastLunch(lunches);

showLunchMenu(lunches);
