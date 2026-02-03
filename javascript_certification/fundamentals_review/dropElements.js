#!/usr/bin/node

/**
 * Drop elements from the start of an array until func returns true.
 *
 * @param {Array} arr - Input array
 * @param {Function} func - Predicate function
 * @param {string} strategy - Algorithm strategy
 * @returns {Array}
 */
function dropElements(arr, func, strategy = "findIndex") {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof func !== "function") {
    throw new TypeError("Second argument must be a function");
  }

  switch (strategy) {
    case "while":
      return dropWhile(arr, func);

    case "loop":
      return dropLoop(arr, func);

    case "findIndex":
      return dropFindIndex(arr, func);

    default:
      throw new Error("Invalid strategy");
  }
}

/* ===== Strategies ===== */

function dropWhile(arr, func) {
  const result = [...arr];
  while (result.length && !func(result[0])) {
    result.shift();
  }
  return result;
}

function dropLoop(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

function dropFindIndex(arr, func) {
  const index = arr.findIndex(func);
  return index === -1 ? [] : arr.slice(index);
}

module.exports = dropElements;
