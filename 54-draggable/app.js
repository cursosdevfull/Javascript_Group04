const listProjects = [
  {
    id: 1,
    title: "Project01",
    description: "Description Project 01",
    status: true,
  },
  {
    id: 2,
    title: "Project02",
    description: "Description Project 02",
    status: true,
  },
  {
    id: 3,
    title: "Project03",
    description: "Description Project 03",
    status: true,
  },
  {
    id: 4,
    title: "Project04",
    description: "Description Project 04",
    status: true,
  },
  {
    id: 5,
    title: "Project05",
    description: "Description Project 05",
    status: true,
  },
  {
    id: 6,
    title: "Project06",
    description: "Description Project 06",
    status: true,
  },
  {
    id: 7,
    title: "Project07",
    description: "Description Project 07",
    status: true,
  },
  {
    id: 8,
    title: "Project08",
    description: "Description Project 08",
    status: false,
  },
  {
    id: 9,
    title: "Project09",
    description: "Description Project 09",
    status: false,
  },
];

let listProjectsRunning = [];
let listProjectsFinished = [];

function loadProjects() {
  projectRunning.querySelector("section").innerHTML = "";
  projectFinished.querySelector("section").innerHTML = "";

  listProjectsRunning.forEach((el) => {
    const zone = document.importNode(template.content, true);
    zone.querySelector("h2").textContent = el.title;
    zone.querySelector("p").textContent = el.description;

    const div = zone.querySelector("div");
    div.setAttribute("id", el.id);
    div.setAttribute("draggable", true);

    div.addEventListener("dragstart", (evt) => {
      evt.dataTransfer.setData("text/plain", el.id);
      evt.dataTransfer.effectAllowed = "move";
    });

    projectRunning.querySelector("section").appendChild(zone);
  });

  listProjectsFinished.forEach((el) => {
    const zone = document.importNode(template.content, true);
    zone.querySelector("h2").textContent = el.title;
    zone.querySelector("p").textContent = el.description;
    zone.querySelector("div").setAttribute("id", el.id);
    zone.querySelector("div").setAttribute("draggable", true);

    projectFinished.querySelector("section").appendChild(zone);
  });
}

function fetchProjects() {
  listProjectsRunning = listProjects.filter(
    (project) => project.status === true
  );
  listProjectsFinished = listProjects.filter(
    (project) => project.status === false
  );

  loadProjects();
}

fetchProjects();

projectFinished.addEventListener("dragenter", (evt) => {
  evt.preventDefault();
  projectFinished.classList.add("draggable");
});

projectFinished.addEventListener("dragover", (evt) => {
  evt.preventDefault();
  projectFinished.classList.add("draggable");
});

projectFinished.addEventListener("dragleave", (evt) => {
  evt.preventDefault();
  projectFinished.classList.remove("draggable");
});

projectFinished.addEventListener("drop", (evt) => {
  const id = evt.dataTransfer.getData("text/plain");

  const index = listProjects.findIndex((el) => el.id === +id);
  if (index >= 0) {
    listProjects[index].status = false;
    fetchProjects();
  }

  projectFinished.classList.remove("draggable");
});

projectRunning.addEventListener("dragenter", (evt) => {
  evt.preventDefault();
  projectRunning.classList.add("draggable");
});

projectRunning.addEventListener("dragover", (evt) => {
  evt.preventDefault();
  projectRunning.classList.add("draggable");
});

projectRunning.addEventListener("dragleave", (evt) => {
  evt.preventDefault();
  projectRunning.classList.remove("draggable");
});
