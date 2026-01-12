#!/usr/bin/node

/**
 * Global count variable used to keep track of the running card count.
 * 
 * It is declared outside the function so that its value persists
 * across multiple function calls.
 */
let count = 0;

/**
 * Evaluates a card and updates the running count based on
 * basic blackjack card-counting rules.
 *
 * Card counting rules:
 * - Cards 2 to 6 increase the count by 1
 * - Cards 7 to 9 do not affect the count
 * - Cards 10, J, Q, K, A decrease the count by 1
 *
 * @param {number|string} card - The card to be evaluated.
 *   - Numbers 2 through 10 are passed as numbers
 *   - Face cards (J, Q, K, A) are passed as strings
 *
 * @returns {string} A string showing the current count and the
 * recommended action:
 *   - "Bet" if the count is greater than 0
 *   - "Hold" if the count is 0 or less
 *   - "Invalid card" if the input is not recognized
 */
function cardCounter(card) {
  // List of valid cards for input validation
  const validCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  // Validate input
  if (!validCards.includes(card)) {
    return "Invalid card";
  }

  // Update count based on card value
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    // No change to count
  } else {
    // 10, J, Q, K, A
    count--;
  }

  // Return betting recommendation
  return count > 0 ? count + " Bet" : count + " Hold";
}
