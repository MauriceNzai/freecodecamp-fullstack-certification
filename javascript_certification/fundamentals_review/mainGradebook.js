const {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg,
} = require("./gradebook-utils");

const scores = [85, 90, 78, 92];
const studentScore = 88;

console.log(getAverage(scores));
console.log(getGrade(studentScore));
console.log(hasPassingGrade(studentScore));
console.log(studentMsg(scores, studentScore));
