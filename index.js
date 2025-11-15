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
let answer = null;

function allClear() {
  numOne = numTwo = operator = null;
  display.textContent = empty;
}

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

function round(num, decimalAmount) {
  return Number(num.toFixed(decimalAmount));
}

function calc() {
  if (operator === null) {
    display.textContent = numOne;
  } else if (numTwo === null) {
    numTwo = numOne;
    answer = round(operator(numOne, numTwo), 10);
    numOne = display.textContent = answer;
  } else {
    answer = round(operator(numOne, numTwo), 10);
    numOne = display.textContent = answer;
  }
}

function insertNum(input) {
  input.addEventListener("click", () => {
    if (answer !== null) {
      numOne = null;
      numTwo = null;
      operator = null;
      answer = null;
      display.textContent = empty;
      numOne = Number((display.textContent += input.value));
    } else if (operator !== null) {
      numTwo = Number((display.textContent += input.value));
    } else {
      numOne = Number((display.textContent += input.value));
    }
  });
}

function insertOperator(input) {
  input.addEventListener("click", () => {
    operator = window[input.value];
    display.textContent = empty;
  });
}

btnAllClear.addEventListener("click", allClear);
btnCalc.addEventListener("click", calc);

inputNum.forEach(insertNum);
inputOperator.forEach(insertOperator);
