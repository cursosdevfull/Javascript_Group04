const sum = (...params) => {
  // sum(10, 30, 13)
  let total = 0;
  for (const param of params) {
    total += param;
  }

  //console.log(total);
  return total;
};

//sum.apply(this, [10, 30, 13]);
const total = sum.call(this, 29, 38, 89, 11);

console.log("TOTAL = " + total);
