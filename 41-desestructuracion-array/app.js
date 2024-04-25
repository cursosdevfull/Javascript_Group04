const dataCSV =
  "sergio;hidalgo;40;hombre\ncarla;montoya;25;mujer\nAlfonso;Tuesta;34;hombre";

const result = dataCSV
  .split("\n")
  .map((line) => line.split(";"))
  .map((el) => {
    const [name, lastname, age, gender] = el;
    return {
      name,
      lastname,
      age,
      gender,
    };
  });

console.log(result);
