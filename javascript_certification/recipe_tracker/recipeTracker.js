/**
 * Recipe Tracker Module
 * ---------------------
 * Provides utilities for managing and enriching recipe data.
 * This module does NOT execute code directly.
 */

/**
 * Calculates the total number of ingredients in a recipe.
 *
 * @param {string[]} ingredients - List of ingredients
 * @returns {number} Total ingredient count
 */
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

/**
 * Determines the difficulty level of a recipe based on cooking time.
 *
 * Difficulty Levels:
 *  - easy   : cooking time ≤ 30 minutes
 *  - medium : cooking time ≤ 60 minutes
 *  - hard   : cooking time > 60 minutes
 *
 * @param {number} cookingTime - Cooking time in minutes
 * @returns {string} Difficulty level
 */
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) return "easy";
  if (cookingTime <= 60) return "medium";
  return "hard";
}

/**
 * Enriches a recipe with computed metadata.
 *
 * @param {Object} recipe - Recipe object
 * @returns {Object} Enriched recipe
 */
function enrichRecipe(recipe) {
  return {
    ...recipe,
    totalIngredients: getTotalIngredients(recipe.ingredients),
    difficultyLevel: getDifficultyLevel(recipe.cookingTime)
  };
}

module.exports = {
  getTotalIngredients,
  getDifficultyLevel,
  enrichRecipe
};
