"use strict";

const showResult = (result, operation) => {
  if (operation == "sum") {
    alert("Result " + operation + " = " + result);
  } else {
    if (operation == "multiply") {
      console.log("Result of " + operation + " = " + result);
    } else {
      if (result < 0) {
        console.log("Result (negative) " + operation + " = " + result);
      } else {
        console.log("Result (positive) " + operation + " = " + result);
      }
    }
  }
};

const showResultSum = (result) => alert("Result of sum = " + result);

const showSubtractResult = (result) => {
  if (result < 0) {
    console.log("Result subtract (negative) = " + result);
  } else {
    console.log("Result subtract (positive) = " + result);
  }
};

const showMultiplyResult = (result) => {
  console.log("Result of multiply = " + result);
};

const sum = (resultHandler, ...parameters) => {
  const validateNumber = (param) => (isNaN(param) ? 0 : param);

  let accum = 0;
  for (const param of parameters) {
    accum += validateNumber(param);
  }

  //alert("Sum = " + accum);
  //showResult(accum, "sum");
  //showResultSum(accum);
  resultHandler(accum);

  return accum;
};

const subtract = (resultHandler, ...parameters) => {
  const validateNumber = (param) => (isNaN(param) ? 0 : param);

  let accum = 0;
  for (const param of parameters) {
    accum -= validateNumber(param);
  }

  //alert("Subtract = " + accum);
  // showResult(accum, "subtract");
  // showSubtractResult(accum);
  resultHandler(accum);

  return accum;
};

const multiply = (resultHandler, ...parameters) => {
  const validateNumber = (param) => (isNaN(param) ? 1 : param);

  let accum = 1;
  for (const param of parameters) {
    accum *= validateNumber(param);
  }

  //alert("Multiply = " + accum);
  //showResult(accum, "multiply");

  //showMultiplyResult(accum);
  resultHandler(accum);

  return accum;
};

console.log(sum(showResultSum, 30, 49, 3));
console.log(subtract(showSubtractResult, -100, 2, 34, 23));
console.log(multiply(showMultiplyResult, 43, 2, 5, 8));
