"use strict";

let firstValue = 0;
let operator = "";

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, a, b) {
  if (operation == "+") {
    return sum(a, b);
  } else if (operation == "-") {
    return subtract(a, b);
  } else if (operation == "*") {
    return multiply(a, b);
  } else if (operation == "/") {
    return divide(a, b);
  }
}

const display = document.querySelector(".results");

function displayNumber(e) {
  display.textContent += e.target.innerText;
}

function chooseOperation(e) {
  operator = e.target.innerText;
	firstValue = Number(display.innerText)
	display.textContent = ""
}

function realDeal(){
	const resultOfOperation = operate(operator,firstValue,Number(display.innerText))
	display.textContent = resultOfOperation
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => number.addEventListener("click", displayNumber));

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) =>
  operator.addEventListener("click", chooseOperation)
);

const equalButton = document.querySelector(".equal").addEventListener("click", realDeal)
const acButton = document.querySelector(".clear").addEventListener("click", function(){
	firstValue = 0
	display.textContent = ""
})
