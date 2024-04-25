const content =
  "juan,pedro,salomón,ana,arnaldo,miguel\nruben,miguel,iván,luis,francisco,carlos\nclaudia,ana,luisa,jimena,carlos,magalli";

const names = content
  .split("\n")
  .map((line) => line.split(","))
  .map((arr) => arr.join("-"))
  .reduce((accum, value) => {
    if (!accum) {
      accum += value;
    } else {
      accum += "-" + value;
    }

    return accum;
  }, "")
  .split("-")
  .sort();

console.log(names);
