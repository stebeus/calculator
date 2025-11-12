"use strict";

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const nums = document.querySelector(".nums");

const btnClear = document.querySelector("[data-action='clear']");
const btnRemove = document.querySelector("[data-action='remove']");
const btnCalc = document.querySelector("[data-action='calc']");

const inputNum = document.querySelectorAll("data-input='num'");
const inputOperator = document.querySelectorAll("data-input='operator'");
