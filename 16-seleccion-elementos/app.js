console.log(document.getElementById("main-title"));

console.log(document.getElementsByClassName("list-item"));

console.log(document.querySelector(".list-item"));
console.log(document.querySelectorAll(".list-item"));

console.log(document.querySelector("ul li:first-of-type"));
console.log(document.querySelector("ul li:last-of-type"));

const ul = document.querySelector("ul");
const li = ul.querySelector("li");

console.log("li", li);

console.log("body", document.body);
console.log("head", document.head);
console.log("html", document.documentElement);

const p = document.getElementById("user-logged");
console.log("p", p);
console.dir(p);
console.log("p.className", p.className);
p.className = "user-operator";
