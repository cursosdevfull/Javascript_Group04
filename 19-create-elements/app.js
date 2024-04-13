const ul = document.querySelector("ul");

//ul.innerHTML += "<li>Item 7</li>";
const newLI = document.createElement("li");
newLI.textContent = "Nuevo texto para un nuevo li";

//ul.appendChild(newLI);
ul.append(newLI);
ul.append("ul example");

// ul.appendChild("esto da error");

const newLI2 = document.createElement("li");
newLI2.textContent = "item 2";
ul.lastElementChild.before(newLI2);

const newLI3 = document.createElement("li");
newLI3.textContent = "item 3";
ul.lastElementChild.before(newLI3);

const newLI4 = document.createElement("li");
newLI4.textContent = "item 4";
ul.append(newLI4);

const newLI5 = document.createElement("li");
newLI5.textContent = "item 5";
ul.append(newLI5);

const newLI6 = document.createElement("li");
newLI6.textContent = "item 6";
ul.append(newLI6);

//ul.replaceChild(newLI5, newLI6);

const newLI7 = document.createElement("li");
newLI7.textContent = "item 7";

ul.insertBefore(newLI7, ul.children[1]);
// ul.insertAfter(newLI7, ul.children[1]);
//console.log(ul.children);
