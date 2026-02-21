/**
 * main.js
 * -------------------
 * Handles user interaction with the Spam Filter UI.
 * Connects input fields and button to the spam detection logic.
 */

import { isSpam } from "./isSpam.js";

// DOM elements
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

/**
 * Handles the click event for the "Check Message" button
 */
checkMessageButton.addEventListener("click", () => {
  const userMessage = messageInput.value.trim();

  // Validate input
  if (userMessage === "") {
    alert("Please enter a message.");
    return;
  }

  // Check message against spam rules
  const spamDetected = isSpam(userMessage);

  // Display result
  result.textContent = spamDetected
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";

  // Clear input for next message
  messageInput.value = "";
});
