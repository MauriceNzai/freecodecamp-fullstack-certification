/**
 * Calculator utility module.
 *
 * Provides basic arithmetic operations such as addition,
 * subtraction, multiplication, division, squaring, and
 * square root calculations.
 *
 * All functions validate input to ensure numeric values
 * are provided before performing calculations.
 */

/**
 * Validates that the provided arguments are numbers.
 *
 * @param {...any} values - Values to validate
 * @throws {TypeError} If any value is not a number
 */
function validateNumbers(...values) {
  for (const value of values) {
    if (typeof value !== "number") {
      throw new TypeError("All arguments must be numbers");
    }
  }
}

/**
 * Calculates the sum of two numbers.
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} The sum of the two numbers
 */
function calculateSum(num1, num2) {
  validateNumbers(num1, num2);
  return num1 + num2;
}

/**
 * Calculates the difference between two numbers.
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} The difference of the two numbers
 */
function calculateDifference(num1, num2) {
  validateNumbers(num1, num2);
  return num1 - num2;
}

/**
 * Calculates the product of two numbers.
 *
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} The product of the two numbers
 */
function calculateProduct(num1, num2) {
  validateNumbers(num1, num2);
  return num1 * num2;
}

/**
 * Calculates the quotient of two numbers.
 *
 * @param {number} num1 - Dividend
 * @param {number} num2 - Divisor
 * @returns {number|string} The quotient or an error message
 */
function calculateQuotient(num1, num2) {
  validateNumbers(num1, num2);
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

/**
 * Calculates the square of a number.
 *
 * @param {number} num - Number to square
 * @returns {number} The squared value
 */
function calculateSquare(num) {
  validateNumbers(num);
  return num ** 2;
}

/**
 * Calculates the square root of a number.
 *
 * @param {number} num - Number to calculate the square root for
 * @returns {number} The square root of the number
 */
function calculateSquareRoot(num) {
  validateNumbers(num);
  return Math.sqrt(num);
}

module.exports = {
  calculateSum,
  calculateDifference,
  calculateProduct,
  calculateQuotient,
  calculateSquare,
  calculateSquareRoot,
};
