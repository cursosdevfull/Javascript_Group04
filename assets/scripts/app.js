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

addBtn.addEventListener("click", calculationResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculationResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculationResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculationResult.bind(this, "DIVIDE"));
