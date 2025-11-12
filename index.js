"use strict";

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const nums = document.querySelector(".numbers");

const btnClear = document.querySelector("[data-action='clear']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnCalc = document.querySelector("[data-action='calc']");

const setAttributes = function (element, options) {
  Object.keys(options).forEach((attr) =>
    element.setAttribute(attr, options[attr])
  );
};

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

const clear = function () {};
const remove = function () {};

const calc = {
  add: function (addendOne, addendTwo) {
    addendOne + addendTwo;
  },
  subtract: function (minuend, subtrahend) {
    minuend - subtrahend;
  },
  multiply: function (multiplicand, multiplier) {
    multiplicand * multiplier;
  },
  divide: function (dividend, divisor) {
    dividend / divisor;
  },
};

btnClear.addEventListener("click", clear);
btnRemove.addEventListener("click", remove);
btnCalc.addEventListener("click", () => {});

inputNum.forEach((btn) => {
  btn.addEventListener("click", () => {});
});
inputOperator.forEach((btn) => {
  btn.addEventListener("click", () => {});
});
