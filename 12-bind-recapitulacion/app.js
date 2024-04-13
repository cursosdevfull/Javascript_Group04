const showResult = (message, result) => {
  alert(message + result);
};

const add = (resultHandler, ...params) => {
  let total = 0;
  for (const param of params) {
    total += param;
  }

  resultHandler(total);
};

const sum = (resultHandler, ...params) => {
  let total = 0;
  for (const param of params) {
    total += param;
  }

  resultHandler(total);
};

const subtract = (resultHandler, ...params) => {
  let total = 0;
  for (const param of params) {
    total -= param;
  }

  resultHandler(total);
};

const multiply = (resultHandler, ...params) => {
  let total = 1;
  for (const param of params) {
    total *= param;
  }

  resultHandler(total);
};

sum(showResult.bind(this, "Result of operation sum "), 10, 3, 8);
subtract(
  showResult.bind(this, "Result of operation subtract "),
  13,
  9,
  34,
  80,
  45
);
multiply(showResult.bind(this, "Result of operation multiply "), 38, 12, 3, 5);
add(showResult.bind(this, "Result is ", 50), 10, 3, 8);
