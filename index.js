"use strict";

const display = document.querySelector(".display");

const btnAllClear = document.querySelector("#all-clear");
const btnRemove = document.querySelector("#remove");
const btnCalc = document.querySelector("#calculate");

const inputDecimal = document.querySelector("[data-input='decimal']");

const inputNums = document.querySelectorAll("[data-input='num']");
const inputOperators = document.querySelectorAll("[data-input='operator']");

let numOne = null;
let numTwo = null;
let operator = null;
let answer = null;

function allClear() {
  numOne = numTwo = operator = answer = display.value = null;
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

function round(num, decimal) {
  return Number(num.toFixed(decimal));
}

function calculate() {
  if (!operator) return;
  else if (!numTwo) numTwo = numOne;

  answer = round(operator(numOne, numTwo), 10);
  numOne = answer;
  display.value = numOne;

  numTwo = null;
  operator = null;
}

function insertNum(input) {
  input.addEventListener("click", () => {
    if (answer !== null && !operator) {
      allClear();
      numOne = Number((display.value += input.value));
    } else if (operator !== null) {
      if (!numTwo) display.value = null;
      numTwo = Number((display.value += input.value));
    } else {
      numOne = Number((display.value += input.value));
    }
  });
}

function insertOperator(input) {
  input.addEventListener("click", () => {
    if (numOne !== null && numTwo !== null) {
      calculate();
    }
    operator = window[input.value];
  });
}

btnAllClear.addEventListener("click", allClear);
btnCalc.addEventListener("click", calculate);

inputNums.forEach(insertNum);
inputOperators.forEach(insertOperator);
