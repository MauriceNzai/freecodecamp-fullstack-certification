#!/usr/bin/node
/**
 * Main Entry Point
 * ----------------
 * Loads recipe data and applies recipe tracker logic.
 */

const { enrichRecipe } = require("./recipeTracker");

/**
 * Initial recipe data
 */
const recipes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22
  },
  {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42
  },
  {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15
  }
];

/**
 * Enrich all recipes and display them
 */
const updatedRecipes = recipes.map(enrichRecipe);
console.log(updatedRecipes);
