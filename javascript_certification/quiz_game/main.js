#!/usr/bin/node

/**
 * Quiz Game Usage Example
 * ----------------------
 * Demonstrates how to use the quiz game core module.
 */

const {
  questions,
  getRandomQuestion,
  getRandomComputerChoice,
  getResults
} = require("./quizGame");

const question = getRandomQuestion(questions);

if (!question) {
  console.log("No questions available.");
  process.exit(1);
}

console.log(`Category: ${question.category}`);
console.log(`Question: ${question.question}`);
console.log(`Choices: ${question.choices.join(", ")}`);

const computerChoice = getRandomComputerChoice(question.choices);
console.log(`\nComputer chose: ${computerChoice}`);

const result = getResults(question, computerChoice);
console.log(`\n${result}`);
