"use strict";

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const nums = document.querySelector(".numbers");

const btnClear = document.querySelector("[data-action='clear']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnCalc = document.querySelector("[data-action='calc']");

function setAttributes(element, options) {
  Object.keys(options).forEach((attr) =>
    element.setAttribute(attr, options[attr])
  );
}

const btnEl = document.createElement("button");

for (let num = 1; num <= 9; num++) {
  setAttributes(btnEl, {"data-input": "num", value: num});
  btnEl.textContent = num;
  nums.appendChild(btnEl.cloneNode(num));
}

const inputNum = document.querySelectorAll("[data-input='num']");
const inputOperator = document.querySelectorAll("[data-input='operator']");

let num;
let operandOne;
let operandTwo;
let operator;
let answer;

function clear() {}
function remove() {}

function add(addendOne, addendTwo) {
  return addendOne + addendTwo;
}
function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}
function multiply(multiplicand, multiplier) {
  return multiplicand * multiplier;
}
function divide(dividend, divisor) {
  return dividend / divisor;
}

function calc(operator, operandOne, operandTwo) {
  return operator(operandOne, operandTwo);
}

btnClear.addEventListener("click", clear);
btnRemove.addEventListener("click", remove);
btnCalc.addEventListener("click", () => {});

inputNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    num = Number((expression.value += btn.value));
    operandOne = num;
  });
});
inputOperator.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = window[btn.value];
    console.log(operator);
  });
});
