"use strict";

const display = document.querySelector("#display");
const nums = document.querySelector(".numbers");

const btnAllClear = document.querySelector("[data-action='all-clear']");
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

let numOne;
let numTwo;
let operator;
let answer;

function allClear() {
  numOne = numTwo = operator = answer = display.value = null;
}
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
  if (divisor === 0) {
    return undefined;
  }
  return dividend / divisor;
}

function calc(operation, operandOne, operandTwo) {
  answer = operation(operandOne, operandTwo);
  return answer;
}

btnAllClear.addEventListener("click", allClear);
btnRemove.addEventListener("click", remove);
btnCalc.addEventListener("click", () => {
  calc(operator, numOne, numTwo);
  display.value = answer;
});

inputNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operator === undefined) {
      numOne = Number((display.value += btn.value));
    } else {
      numTwo = Number((display.value += btn.value));
    }
  });
});

inputOperator.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = window[btn.value];
    display.value = null;
  });
});
