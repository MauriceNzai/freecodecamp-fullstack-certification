/*
=========================================
Rock Paper Scissors Game Logic
=========================================

This script implements the gameplay logic for a
browser-based Rock-Paper-Scissors game.

Game Flow:
1. Player selects Rock, Paper, or Scissors
2. Computer randomly selects an option
3. Winner of the round is determined
4. Score is updated
5. First to reach 3 points wins
6. Game can be reset and played again
*/

/* Available choices */
const options = ["Rock", "Paper", "Scissors"];

/**
 * Returns a random option for the computer.
 * @returns {string} Computer's choice
 */
function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

/**
 * Determines if the player wins the round.
 *
 * @param {string} playerChoice
 * @param {string} computerChoice
 * @returns {boolean}
 */
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

/* Game state variables */
let playerScore = 0;
let computerScore = 0;

/**
 * Computes the result of a round.
 *
 * @param {string} userOption
 * @returns {string} Round result message
 */
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

/* DOM Elements */

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");

const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

/**
 * Displays round results and updates the UI.
 *
 * @param {string} userOption
 */
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);

  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  /* Check if someone has won the game */
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    /* Show reset button and hide options */
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

/**
 * Resets the game state and UI.
 */
function resetGame() {
  playerScore = computerScore = 0;

  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";

  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}

/* Reset button event */
resetGameBtn.addEventListener("click", resetGame);

/* Option buttons */

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

/* Player selections */

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
