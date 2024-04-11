let currentResult = 0;

function getUserNumberInput() {
  return Number(userInput.value);
}

function createAndWriteOutput(operator, initialResult, calcNumber) {
  currentCalculationOutput.textContent = `${initialResult} ${operator} ${calcNumber}`;
  currentResultOutput.textContent = currentResult;
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator = "";

  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  // true == "true" (true)
  // "10" == true (true)

  // true === "true" (false)
  // "10" === true (false)

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
  calculationResult("ADD");
  //const enteredNumber = Number(userInput.value);
  // const enteredNumber = +userInput.value;
  //const enteredNumber = parseInt(userInput.value);
  /* const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult += enteredNumber;

  createAndWriteOutput("+", initialResult, enteredNumber); */
  /* currentCalculationOutput.textContent = `${initialResult} + ${enteredNumber}`;
  currentResultOutput.textContent = currentResult; */
}

function subtract() {
  calculationResult("SUBTRACT");

  /*   const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult -= enteredNumber;

  createAndWriteOutput("-", initialResult, enteredNumber); */
}

function multiply() {
  calculationResult("MULTIPLY");

  /*   const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult *= enteredNumber;

  createAndWriteOutput("*", initialResult, enteredNumber); */
}

function divide() {
  calculationResult("DIVIDE2");

  /*   const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult /= enteredNumber;

  createAndWriteOutput("/", initialResult, enteredNumber); */
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
