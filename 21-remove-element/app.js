const h1 = document.getElementById("main-title");
h1.remove();

const ul = document.querySelector("ul");
//ul.removeChild(ul.children[1]);
//ul.firstElementChild.remove();

if (ul.children.length > 0) {
  for (let index = 0; index < ul.children.length; index++) {
    ul.removeChild(ul.children[index]);
  }
}
