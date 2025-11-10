"use strict";

let nums = [100, -50, 15];
let operation = add;

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

function operate(operation, nums) {
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

console.log(operate(operation, nums));
