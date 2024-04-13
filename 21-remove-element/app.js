const h1 = document.getElementById("main-title");
h1.remove();

const ul = document.querySelector("ul");
//ul.removeChild(ul.children[1]);
//ul.firstElementChild.remove();

if (ul.children.length > 0) {
  const length = ul.children.length;
  for (let index = length - 1; index >= 0; index--) {
    ul.removeChild(ul.children[index]);
  }
}
