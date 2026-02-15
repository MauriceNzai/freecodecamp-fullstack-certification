#!/usr/bin/env node

const filterDiff = require("./filter_diff");
const setDiff = require("./set_diff");
const hashDiff = require("./hashmap_diff");

const arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

console.log("Filter:", filterDiff(arr1, arr2));
console.log("Set:", setDiff(arr1, arr2));
console.log("HashMap:", hashDiff(arr1, arr2));
