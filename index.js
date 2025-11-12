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

const btnClear = document.querySelector("[data-action='clear']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnNum = document.querySelectorAll("[data-action='input-num']");
const btnOperator = document.querySelectorAll("[data-action='input-operator']");
const btnCalculate = document.querySelector("[data-action='calc']");

let numOne;
let numTwo;
let operator;
let answer;

const calc = {
  add: function (numOne, numTwo) {
    return numOne + numTwo;
  },

  subtract: function (numOne, numTwo) {
    return numOne - numTwo;
  },

  multiply: function (numOne, numTwo) {
    return numOne * numTwo;
  },

  divide: function (numOne, numTwo) {
    return numOne / numTwo;
  },
};

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

btnClear.addEventListener("click", () => {
  num = null;
  operands = [];
  operator = null;
  expression.textContent = null;
  result.textContent = null;
});

btnCalculate.addEventListener("click", () => {
  if (operands.length === 0) {
    ans = num;
  } else if (operands.length > 0) {
    operands.push(num);
    ans = calculate(operator, operands);
    operands = [];
  }

  result.textContent = ans;

  console.log(operands);
  console.log(ans);
});
