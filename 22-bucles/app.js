for (let index = 20; index >= 0; index--) {
  console.log("index", index);
}

const divs = document.querySelectorAll("div");

for (const el of divs) {
  const url = el.textContent;
  el.textContent = "";
  const img = document.createElement("img");
  img.src = url;

  el.appendChild(img);
}

const informationUser = {
  name: "Sergio",
  lastname: "Hidalgo",
  age: 40,
  gender: "male",
  status: "married",
};

for (const el in informationUser) {
  console.log("property", el);
  console.log("value", informationUser[el]);
}

console.log("listado de propiedades", Object.keys(informationUser));

for (const el of Object.keys(informationUser)) {
  console.log("property's value", informationUser[el]);
}

let randomNumber = Math.floor(Math.random() * 100 + 1);

while (randomNumber > 20) {
  console.log("randomNumber", randomNumber);
  randomNumber = Math.floor(Math.random() * 100 + 1);
}

console.log("end value", randomNumber);

do {
  console.log("twice", randomNumber * 2);
  randomNumber = Math.floor(Math.random() * 100 + 1);
} while (randomNumber > 40);
