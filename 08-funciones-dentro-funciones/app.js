const sum = (...numbers) => {
  let total = 0;
  for (const number of numbers) {
    if (!isNaN(number)) {
      total += number;
    }

    /* if (isNaN(number) == false) {
      total += number;
    } */

    /* if (isNaN(number)) {
    } else {
      total += number; // total = total + number
    } */
  }

  return total;
};

console.log(sum(10, 30, "hola", ["sergio", "ana"], 54, 23));

const sumar = (...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);
  /*const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;*/
  /*const result = isNaN(number) ? 0 : number;
    return result;*/

  /*if (isNaN(number)) {
      return 0;
    } else {
      return number;
    }*/
  //};

  let total = 0;
  for (const number of numbers) {
    total += validateNumber(number);
  }
  return total;
};

console.log(sumar(10, 30, "hola", ["sergio", "ana"], 54, 23));

// console.log(validateNumber(50));
