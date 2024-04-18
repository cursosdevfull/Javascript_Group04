let currentResult = 0;
const logs = [];

function getUserNumberInput() {
  return Number(userInput.value);
}

function createAndWriteOutput(operator, initialResult, calcNumber) {
  currentCalculationOutput.textContent = `${initialResult} ${operator} ${calcNumber}`;
  currentResultOutput.textContent = currentResult;
}

// action continue: logging
function logger(operationIdentifier, prevResult, operationNumber, result) {
  const entry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: result,
  };

  logs.push(entry);
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
  logger(calculationType, initialResult, enteredNumber, currentResult);
  // calculationType, initialResult, enteredNumber, currentResult
}

addBtn.addEventListener("click", calculationResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculationResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculationResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculationResult.bind(this, "DIVIDE"));
logsBtn.addEventListener("click", () => {
  console.table(logs);
});
