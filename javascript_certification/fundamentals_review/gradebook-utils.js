#!/usr/bin/node

/**
 * Calculate the average score of a list of numeric scores.
 *
 * @param {number[]} scores - An array of student scores.
 * @returns {number} The average score. Returns 0 if the array is empty.
 */
function getAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return 0;
  }

  return scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
}

/**
 * Determine the letter grade for a given student score.
 *
 * @param {number} studentScore - The student's numeric score (0–100).
 * @returns {string} The corresponding letter grade, or "Invalid" if out of range.
 */
function getGrade(studentScore) {
  if (typeof studentScore !== "number" || studentScore < 0 || studentScore > 100) {
    return "Invalid";
  }

  if (studentScore === 100) return "A+";
  if (studentScore >= 90) return "A";
  if (studentScore >= 80) return "B";
  if (studentScore >= 70) return "C";
  if (studentScore >= 60) return "D";
  return "F";
}

/**
 * Check whether a student has a passing grade.
 *
 * @param {number} studentScore - The student's numeric score.
 * @returns {boolean} True if the student passed, otherwise false.
 */
function hasPassingGrade(studentScore) {
  const grade = getGrade(studentScore);
  return grade !== "F" && grade !== "Invalid";
}

/**
 * Generate a summary message for a student based on class scores
 * and the student's individual score.
 *
 * @param {number[]} scores - An array of class scores.
 * @param {number} studentScore - The student's numeric score.
 * @returns {string} A formatted message describing the student's result.
 */
function studentMsg(scores, studentScore) {
  const average = getAverage(scores).toFixed(2);
  const grade = getGrade(studentScore);

  if (grade === "Invalid") {
    return "Invalid student score.";
  }

  const passed = hasPassingGrade(studentScore);

  return `Class average: ${average}. Your grade: ${grade}. You ${
    passed ? "passed" : "failed"
  } the course.`;
}

module.exports = {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg,
};
