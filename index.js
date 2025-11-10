"use strict";

const display = document.querySelector(".display");
const containerNums = document.querySelector(".numbers");
const btnNum = document.createElement("button");

for (let i = 10; i > 0; i--) {
  btnNum.textContent = i - 1;
  containerNums.appendChild(btnNum.cloneNode(i));
}
