"use strict";

const btnAllClear = document.querySelector("#all-clear");
const btnRemove = document.querySelector("#remove");
const btnCalc = document.querySelector("#calculate");

const inputDecimal = document.querySelector("[data-input='decimal']");

const inputNums = document.querySelectorAll("[data-input='num']");

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

function calculate() {
  return operator(numOne, numTwo);
}
