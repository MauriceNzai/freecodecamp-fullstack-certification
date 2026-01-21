#!/usr/bin/node

const {
  lookUpProfile,
  findContactByFirstName,
} = require("./contacts");

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Example lookups
console.log(lookUpProfile(contacts, "Kristian", "lastName"));
console.log(lookUpProfile(contacts, "Bob", "number"));
console.log(lookUpProfile(contacts, "Akira", "likes"));

// Example direct contact fetch
const harry = findContactByFirstName(contacts, "Harry");
console.log(harry);
