let currentNumber = "";
let previousNumber = "";
let operator = undefined;

function clear() {
  currentNumber = "";
  previousNumber = "";
  operator = undefined;
}
function appendNumber(number) {
  currentNumber = currentNumber.toString() + number.toString();
}

function deleteLastNumber(){
	currentNumber = currentNumber.slice(0,-1)
}

function updateDisplay() {
  currentNumberTextContent.innerText = currentNumber;
  if (operator != null) {
    previousNumberTextContent.innerText = `${previousNumber} ${operator}`;
  } else {
    previousNumberTextContent.innerText = "";
  }
}

function chooseOperation(operation) {
  if (currentNumber == "") return;
  if (previousNumber != "") {
    operate();
  }
  operator = operation;
  previousNumber = currentNumber;
  currentNumber = "";
}

function operate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;
  if (operator === "+") {
    result = prev + current;
  } else if (operator === "-") {
    result = prev - current;
  } else if (operator === "*") {
    result = prev * current;
  } else if (operator === "÷") {
    result = prev / current;
  } else {
    return;
  }

  currentNumber = result;
  operator = undefined;
  previousNumber = "";
}

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousNumberTextContent = document.querySelector(
  "[data-previous-number]"
);
const currentNumberTextContent = document.querySelector(
  "[data-current-number]"
);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  })
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
    updateDisplay();
  })
);

equalButton.addEventListener("click", () => {
  operate();
  updateDisplay();
});

allClearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteButton.addEventListener("click", () => {
	deleteLastNumber()
  updateDisplay();
});
