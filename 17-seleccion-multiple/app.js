const listItemsSelectedQuerySelectorAll = document.querySelectorAll("li");
console.log(
  "listItemsSelectedQuerySelectorAll",
  listItemsSelectedQuerySelectorAll
);

const listItemsSelectedElementsByTagName = document.getElementsByTagName("li");
console.log(
  "listItemsSelectedElementsByTagName",
  listItemsSelectedElementsByTagName
);

const h1_1 = document.getElementById("main-title");
const h1_2 = document.querySelector("#main-title");
const h1_3 = document.querySelector("h1");
const h1_4 = document.getElementsByTagName("h1")[0];

const h1 = document.querySelector("h1");
console.dir(h1);
h1.textContent = "Nuevo contenido";
h1.style.color = "skyblue";
h1.style.backgroundColor = "purple";
