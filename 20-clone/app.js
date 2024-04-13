const newLi = document.createElement("li");
const content = document.createTextNode("Hola mundo");
newLi.append(content);

const firstLi = document.querySelector("li:first-of-type");
const cloneLi = firstLi.cloneNode(true);
cloneLi.textContent = "Item 11";

const ul = firstLi.parentElement;

ul.append(newLi, cloneLi);
