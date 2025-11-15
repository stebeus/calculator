"use strict";

const display = document.querySelector(".display");

const btnAllClear = document.querySelector("[data-action='all-clear']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnCalc = document.querySelector("[data-action='calc']");

const inputNum = document.querySelectorAll("[data-input='num']");
const inputOperator = document.querySelectorAll("[data-input='operator']");

const empty = "";

let numOne = null;
let numTwo = null;
let operator = null;

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
  return divisor === 0 ? "Undefined" : dividend / divisor;
}

function calc() {
  return operator(numOne, numTwo);
}

function insertNum(input) {
  input.addEventListener("click", () => {
    if (operator !== null) {
      numTwo = display.textContent += input.value;
    } else {
      numOne = display.textContent += input.value;
    }
  });
}

function insertOperator(input) {
  input.addEventListener("click", () => {
    operator = window[input.value];
    display.textContent = empty;
  });
}

inputNum.forEach(insertNum);
inputOperator.forEach(insertOperator);
