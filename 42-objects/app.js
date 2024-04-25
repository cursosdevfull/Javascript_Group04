const person = {
  name: "Adriana",
  lastname: "Zavala",
  age: 40,
  hobbies: ["correr", "estudiar", "bailar"],
  parentNames: { father: "Silvio", mother: "Alicia" },
  "list of workers": ["Antonio", "Walter", "Alicia"],
  greet: function GreetMeessage() {
    alert("Buen día");
  },
  getFullName() {
    return `${this.name} ${this.lastname}`;
  },
};

console.log("Person", person);
console.log("name", person.name);
console.log("lastname", person.lastname);
console.log("age", person["age"]);
console.log("list of workers", person["list-of-workers"]);

person.isAdmin = true;

person.name = "Augusto";

console.log("Person", person);

Object.freeze(person);
person.name = "Anibal";
console.log(person);
