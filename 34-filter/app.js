let students = [];
let originalStudents = [];

function fetchStudents() {
  const names = [
    "John",
    "Jane",
    "Mike",
    "Emily",
    "Robert",
    "Emma",
    "James",
    "Olivia",
    "William",
    "Sophia",
    "Jacob",
    "Ava",
    "Michael",
    "Isabella",
    "Ethan",
    "Mia",
    "Alexander",
    "Charlotte",
    "Daniel",
    "Amelia",
  ];
  const lastnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
  ];

  for (let i = 0; i < 40; i++) {
    const student = {
      name: names[Math.floor(Math.random() * names.length)],
      lastname: lastnames[Math.floor(Math.random() * lastnames.length)],
      age: Math.floor(Math.random() * (50 - 18 + 1)) + 18,
      grade: Math.floor(Math.random() * (20 - 0 + 1)) + 0,
    };
    students.push(student);
  }

  students = students.map((student) => ({
    fullname: `${student.name} ${student.lastname}`,
    age: student.age,
    grade: student.grade,
  }));
}

function clearStudents() {
  tbody.innerHTML = "";
}

function loadStudents() {
  clearStudents();

  for (const student of students) {
    const tr = document.createElement("tr");
    const tdFullname = document.createElement("td");
    tdFullname.textContent = student.fullname;
    const tdAge = document.createElement("td");
    tdAge.textContent = student.age;
    const tdGrade = document.createElement("td");
    tdGrade.textContent = student.grade;

    tr.append(tdFullname);
    tr.append(tdAge);
    tr.append(tdGrade);

    tbody.append(tr);
  }

  if (originalStudents.length === 0) originalStudents = [...students];
}

function filter(option) {
  students = option
    ? originalStudents.filter(
        (student) => student.age > 40 && student.grade > 15
      )
    : originalStudents.filter(
        (student) => student.age <= 40 && student.grade < 10
      );

  console.log(students);
  console.log(originalStudents);

  loadStudents();
}

fetchStudents();
loadStudents();

btnFilterGreater.addEventListener("click", filter.bind(this, true));
btnFilterLess.addEventListener("click", filter.bind(this, false));
