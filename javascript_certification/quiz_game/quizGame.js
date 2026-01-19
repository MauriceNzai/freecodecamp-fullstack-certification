#!/usr/bin/node

/**
 * Quiz Game Core Module
 * --------------------
 * Contains quiz data and core game logic functions.
 */

/**
 * Array of quiz questions.
 * Each question has exactly three unique choices.
 */
const questions = [
  {
    category: "Programming",
    question: "Which language runs in a web browser?",
    choices: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    category: "Databases",
    question: "Which SQL keyword is used to retrieve data?",
    choices: ["SELECT", "INSERT", "UPDATE"],
    answer: "SELECT"
  },
  {
    category: "Linux",
    question: "Which command lists directory contents?",
    choices: ["ls", "cd", "pwd"],
    answer: "ls"
  },
  {
    category: "Networking",
    question: "What does HTTP stand for?",
    choices: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Host Transfer Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    category: "Security",
    question: "Which one is a strong password?",
    choices: ["password123", "123456", "P@ssw0rd!9"],
    answer: "P@ssw0rd!9"
  }
];

/**
 * Returns a random question from the questions array.
 *
 * @param {Array} questions - Array of quiz questions
 * @returns {Object|null} Random question or null if empty
 */
function getRandomQuestion(questions) {
  if (questions.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

/**
 * Returns a random answer choice.
 *
 * @param {Array} choices - Array of possible answers
 * @returns {string|null} Random choice or null if empty
 */
function getRandomComputerChoice(choices) {
  if (choices.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/**
 * Evaluates whether the selected answer is correct.
 *
 * @param {Object} question - Quiz question object
 * @param {string} answer - Selected answer
 * @returns {string} Result message
 */
function getResults(question, answer) {
  if (question.answer === answer) {
    return "✅ The computer's choice is correct!";
  }
  return `❌ The computer's choice is wrong.
Correct answer: ${question.answer}`;
}

module.exports = {
  questions,
  getRandomQuestion,
  getRandomComputerChoice,
  getResults
};
