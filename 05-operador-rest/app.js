"use strict";
/* function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
} */

/*function sum(arrValues) {
  let total = 0;

  for (const element of arrValues) {
    total = total + element;
  }*/

/*for (var position = 0; position < arrValues.length; position = position + 1) {
    console.log(position, arrValues[position]);
    total = total + arrValues[position];
  }*/

/*  return total;
}*/

function sum(...arrValues) {
  let total = 0;

  for (const element of arrValues) {
    total = total + element;
  }

  return total;
}

//const values = [4, 5, 8, 20, 13, 56, 9, 29, 90];

//const resultSum = sum(4, 5, 8, 20, 13, 56);
//const resultSum = sum(values);
const resultSum = sum(4, 5, 8, 20, 13, 56, 9, 29, 90, 100);
console.log("Result sum", resultSum);

function operation(type, ...arrValues) {
  let total = 0;

  for (const value of arrValues) {
    if (type == "sum") {
      total = total + value;
    }

    if (type == "substract") {
      total = total - value;
    }
  }

  return total;
}

const result = operation("substract", 10, 34, 13, 89);
console.log("result", result);
