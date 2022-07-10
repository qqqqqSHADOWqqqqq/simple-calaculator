const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

// Gets inout from iput field
function getUserInput() {
  return parseInt(userInput.value);
}

// Generate and writes calculation log
function createAnWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}
function writeToLog(
  operationIdentifer,
  prevResults,
  OperationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifer,
    prevResult: prevResults,
    number: OperationNumber,
    result: newResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}
function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "Multiply" &&
      calculationType !== "Divide") ||
      !enteredNumber
  ) {
    return;
  }

  
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "Divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAnWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("Multiply");
}
function divide() {
  calculateResult("Divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
