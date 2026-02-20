#!/usr/bin/env node

import {getRandomIndex} from "./generateRandomIndex.js";

const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
const btn = document.querySelector("#btn");

/**
 * Changes the background color randomly
 */
function changeBackgroundColor() {
  const randomIndex = getRandomIndex(darkColorsArr.length);
  const color = darkColorsArr[randomIndex];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

btn.addEventListener("click", changeBackgroundColor);
