"use strict";

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const nums = document.querySelector(".nums");

const btnClear = document.querySelector("[data-action='clear']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnCalc = document.querySelector("[data-action='calc']");

const inputNum = document.querySelectorAll("data-input='num'");
const inputOperator = document.querySelectorAll("data-input='operator'");

const setAttributes = function (element, options) {
  Object.keys(options).forEach((attr) =>
    element.setAttributes(attr, options[attr])
  );
};

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
