const hobbies = [
  "hacer parrilladas",
  "aprender cosas nuevas",
  "viajar",
  "cocinar",
  "enseñar",
];
console.log("hobbies", hobbies);
hobbies.push("salir con amigos");
console.log("hobbies", hobbies);

hobbies.unshift("tocar la guitarra");
console.log("hobbies", hobbies);

const itemDeleted = hobbies.pop();
console.log("itemDeleted", itemDeleted);
console.log("hobbies", hobbies);

const otherItemDeleted = hobbies.shift();
console.log("itemDeleted", itemDeleted);
console.log("hobbies", hobbies);
