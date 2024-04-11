"use strict";

const showResult = (message, result) => {
  console.log("message", message);
  console.log("result", result);
  alert(message + result);
};

const sum = (resultHandler, ...parameters) => {
  const validateNumber = (param) => (isNaN(param) ? 0 : param);

  let accum = 0;
  for (const param of parameters) {
    accum += validateNumber(param);
  }

  resultHandler(accum);

  return accum;
};

const subtract = (resultHandler, ...parameters) => {
  const validateNumber = (param) => (isNaN(param) ? 0 : param);

  let accum = 0;
  for (const param of parameters) {
    accum -= validateNumber(param);
  }

  resultHandler(accum);

  return accum;
};

const multiply = (resultHandler, ...parameters) => {
  const validateNumber = (param) => (isNaN(param) ? 1 : param);

  let accum = 1;
  for (const param of parameters) {
    accum *= validateNumber(param);
  }

  resultHandler(accum);

  return accum;
};

console.log(sum(showResult.bind(this, "Result of sum is "), 30, 49, 3));
console.log(
  subtract(showResult.bind(this, "Result of subtract is "), -100, 2, 34, 23)
);
console.log(
  multiply(showResult.bind(this, "Result of multiply is "), 43, 2, 5, 8)
);
