#!/usr/bin/node
const {
	// Linear Search approach
  findProductIndexLinear,
  addProductLinear,
  removeProductLinear,

  // Higher-Order Functions approach
  addProductHOF,
  removeProductHOF
} = require("./inventoryManagement");

const inventory = [];

addProductLinear(inventory, "Flour", 10);
addProductHOF(inventory, "Sugar", 5);
removeProductLinear(inventory, "FLOUR", 5);

console.log(inventory);
// [{ name: "flour", quantity: 5 }, { name: "sugar", quantity: 5 }]
