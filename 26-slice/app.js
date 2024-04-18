const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

function clearRender() {
  ul.innerHTML = "";
}

function renderDays(onlyWorkingDays) {
  clearRender();

  const daysToShow = onlyWorkingDays ? days.slice(0, 5) : days.slice(5);

  for (const day of daysToShow) {
    const li = document.createElement("li");
    li.textContent = day;

    ul.append(li);
  }
}

btnWorkingDays.addEventListener("click", renderDays.bind(this, true));
btnWeekend.addEventListener("click", renderDays.bind(this, false));
