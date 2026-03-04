/**
 * Emoji Reactor App
 * ------------------
 * This script handles emoji reaction buttons.
 * Each button contains a `.count` span displaying the current count
 * in the format "current/10".
 * 
 * When a user clicks a button:
 * - The count increases by 1
 * - The count cannot exceed 10
 */

/**
 * Updates the reaction count for a given emoji button.
 *
 * @param {HTMLElement} btn - The emoji button that was clicked
 */
function updateCount(btn) {
  // Select the span element that holds the count (e.g., "3/10")
  const countEl = btn.querySelector(".count");

  // Extract the current number before "/10"
  // Example: "3/10" → ["3", "10"] → take index 0 → convert to number
  let currCount = +countEl.textContent.split("/")[0];
  
  // Prevent the count from exceeding 10
  if (currCount === 10) return;
  
  // Increment the count
  currCount++;
  
  // Update the text content to reflect the new count
  countEl.textContent = `${currCount}/10`;
}

// Select all emoji buttons
const btns = document.querySelectorAll(".emoji-btn");

// Attach click event listeners to each button
btns.forEach((btn) =>
  btn.addEventListener("click", () => updateCount(btn))
);
