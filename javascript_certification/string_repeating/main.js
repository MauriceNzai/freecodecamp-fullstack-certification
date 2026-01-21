const {
  repeatWithForLoop,
  repeatWithWhileLoop,
  repeatWithRecursion,
  repeatWithArrayJoin,
  repeatWithReduce
} = require("./stringRepeater");

console.log(repeatWithForLoop("abc", 3));
console.log(repeatWithWhileLoop("abc", 3));
console.log(repeatWithRecursion("abc", 3));
console.log(repeatWithArrayJoin("abc", 3));
console.log(repeatWithReduce("abc", 3));
