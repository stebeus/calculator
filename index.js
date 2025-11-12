"use strict";

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const containerNums = document.querySelector(".numbers");

const btn = document.createElement("button");

for (let i = 1; i <= 9; i++) {
  btn.textContent = i;
  btn.setAttribute("data-action", "input-num");
  btn.setAttribute("value", i);
  containerNums.appendChild(btn.cloneNode(i));
}

const btnClear = document.querySelector("[data-action='clear-all']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnNum = document.querySelectorAll("[data-action='input-num']");
const btnOperator = document.querySelectorAll("[data-action='input-operator']");
const btnCalculate = document.querySelector("[data-action='calculate']");

let num;
let operands = [];
let operator;

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

function calculate(operation, operands) {
  return operation(...operands);
}

btnNum.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    num = Number((expression.textContent += btn.value));
  });
});

btnOperator.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = window[btn.value];
    operands.push(num);
    num = "";
    expression.textContent = "";
  });
});

btnCalculate.addEventListener("click", () => {
  operands.push(num);
  let answer = calculate(operator, operands);
  result.textContent = answer;
});
