const ul = document.querySelector("ul");
ul.innerHTML += "<li>Item 6</li>";

const div = document.querySelector("div");

div.insertAdjacentHTML("afterend", "<h1>Título</h1>");
