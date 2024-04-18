const boys = ["Jorge", "Pedro", "Carlos", "Luis"];
const girls = ["Claudia", "Silvia", "Carolina", "Gloria", "Mery"];
const teachers = ["Augusto", "Karen", "Yolanda", "Atilio", "José"];

let list = [];

function clearRender() {
  ul.innerHTML = "";
}

function clear() {
  list = [];
  clearRender();
}

function render() {
  clearRender();
  for (const item of list) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  }
}

function addPeople(people) {
  list = list.concat(people);
  render();
}

function addGirlsAndBoys() {
  list = list.concat(girls, boys);
  render();
}

btnBoys.addEventListener("click", addPeople.bind(this, boys));
btnGirls.addEventListener("click", addPeople.bind(this, girls));
btnTeachers.addEventListener("click", addPeople.bind(this, teachers));
btnGirlsAndBoys.addEventListener("click", addGirlsAndBoys);
btnClear.addEventListener("click", clear);
