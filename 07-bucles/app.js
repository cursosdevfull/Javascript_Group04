"use strict";
for (let count = 0; count <= 50; count = count + 1) {
  // count += 1
  console.log("count", count);
}

for (let contador = 0; contador < 10; contador += 1) {
  // contador = contador + 1
  console.log("contador", contador);
}

for (let counter = 0; counter < 10; counter++) {
  // counter = counter + 1
  console.log("counter", counter);
}

const users = ["Miguel", "Javier", "Rosa", "Marina"];

for (const user of users) {
  console.log(user);
}

const userInfo = {
  name: "José Luis",
  lastname: "Urrelo",
  age: 45,
  status: "single",
};

for (const prop in userInfo) {
  console.log("prop", prop);
  console.log("value", userInfo[prop]);
}

console.log("keys", Object.keys(userInfo));

for (const prop of Object.keys(userInfo)) {
  console.log("prop2", prop);
  console.log("value2", userInfo[prop]);
}
