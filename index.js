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
  numOne = numTwo = operator = display.value = null;
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

function calculate() {
  return (display.value = operator(numOne, numTwo));
}

function insertNum(input) {
  input.addEventListener("click", () => {
    if (operator !== null) {
      if (!numTwo) {
        display.value = null;
      }
      numTwo = Number((display.value += input.value));
    } else {
      numOne = Number((display.value += input.value));
    }
  });
}

function insertOperator(input) {
  input.addEventListener("click", () => {
    operator = window[input.value];
  });
}

btnAllClear.addEventListener("click", allClear);
btnCalc.addEventListener("click", calculate);

inputNums.forEach(insertNum);
inputOperators.forEach(insertOperator);
