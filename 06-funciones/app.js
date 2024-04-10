"use strict";
function sum(...numbers) {
  // numbers = [10, 20, 30, 40]
  let total = 0;

  for (const number of numbers) {
    total = total + number;
  }

  return total;
}

const ftnMultiply = function multiply(...numbers) {
  let total = 1;

  for (const number of numbers) {
    total = total * number;
  }

  return total;
};

let ftnDivide = function (a, b) {
  console.log("CONTEXT", this);
  return a / b;
};

console.log("SUM", sum(10, 20, 30, 40));
console.log("MULTIPLY", ftnMultiply(10, 20, 30));
console.log("DIVIDE", ftnDivide(30, 6));
console.log("MODULE", module(30, 7));
//console.log("MODULE_V2", ftnModule(30, 7));

function module(a, b) {
  return a % b;
}

const ftnModule = function (a, b) {
  return a % b;
};

const ftnModuleV3 = (a, b) => {
  console.log(this);
  return a % b;
};

console.log("MODULE_V3", ftnModuleV3(40, 7));
