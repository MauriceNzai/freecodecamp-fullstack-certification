/**
 * Real-Time Character Counter
 * ---------------------------
 * Updates the number of characters typed inside a textarea
 * and displays the result in real time.
 *
 * If the user exceeds the maximum allowed characters,
 * the text is trimmed and the counter color changes.
 */

/* Select DOM elements */
const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

/**
 * Updates the character counter.
 *
 * @param {HTMLTextAreaElement} textarea - The textarea element being monitored
 * @param {HTMLElement} counter - The element displaying the count
 * @param {number} max - Maximum number of characters allowed
 */
function updateCharacterCount(textarea, counter, max) {

  // Get the current textarea value
  const text = textarea.value;

  // If the text exceeds the allowed maximum
  if (text.length >= max) {

    // Change the counter color to red
    counter.style.color = "red";

    // Trim the text to the maximum allowed characters
    textarea.value = text.slice(0, max);
  } else {
    // Reset the counter and textarea color when within limit
    counter.style.color = "#333";
    textarea.style.color = "#333";
  }

  // Update the counter text
  counter.textContent = `Character Count: ${textarea.value.length}/${max}`;
}

/* 
Attach event listener
Runs every time the user types, deletes, or pastes text.
*/
textInput.addEventListener(
  "input",
  () => updateCharacterCount(textInput, charCount, 50)
);
