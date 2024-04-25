const content =
  "juan,pedro,salomón,ana,arnaldo,miguel\nruben,miguel,iván,luis,francisco,carlos\nclaudia,ana,luisa,jimena,carlos,magalli";

const names = content
  .split("\n")
  .map((line) => line.split(","))
  .map((arr) => arr.join("-"))
  .reduce((accum, value) => {
    accum = !accum ? accum + value : accum + "-" + value;

    return accum;
  }, "")
  .split("-")
  .sort()
  .reduce((accum, value) => {
    const positionFound = accum.findIndex((el) => el.name === value);

    if (positionFound < 0) {
      accum.push({ name: value, quantity: 1 });
    } else {
      accum[positionFound].quantity++;
    }

    return accum;
  }, [])
  .filter((el) => el.quantity > 1);

console.log(names);
