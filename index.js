"use strict";

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const containerNums = document.querySelector(".numbers");

const btnClear = document.querySelector("[data-action='clear-all']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnNum = document.querySelector("[data-action='input-num']");
const btnOperator = document.querySelector("[data-action='input-operator']");
const btnCalculate = document.querySelector("[data-action='calculate']");

const btn = document.createElement("button");

let nums = [100, -50, 15];
let operator = add;

for (let i = 1; i <= 9; i++) {
  btn.textContent = i;
  btn.setAttribute("data-action", "input-num");
  containerNums.appendChild(btn.cloneNode(i));
}

btnNum.addEventListener("click", (e) => {
  console.log(e.target);
});

btnOperator.addEventListener("click", (e) => {
  console.log(e.target);
});

function add(...num) {
  return num.reduce((total, current) => total + current);
}

function subtract(...num) {
  return num.reduce((difference, current) => difference - current);
}

function multiply(...num) {
  return num.reduce((product, current) => product * current);
}

function divide(...num) {
  return num.reduce((quotient, current) => quotient / current);
}

function calculate(operation, nums) {
  return operation(...nums);
}

console.log(
  add(2, 4, 10),
  subtract(16, 8),
  subtract(16, 20),
  multiply(8, 2),
  divide(50, 5),
  divide(50, 5, 2)
);

console.log(calculate(operator, nums));
