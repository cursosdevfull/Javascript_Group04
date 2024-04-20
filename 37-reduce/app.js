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

  const ageSum = students.reduce((accum, student) => {
    accum += student.age;
    return accum;
  }, 0);

  alert(ageSum);
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

function reduce() {
  const inputName = inputStudentName.value;

  const results = students.filter(
    (student) => student.name.toLowerCase() === inputName.toLowerCase()
  );
  /*.reduce(
      (accum, current) => {
        if (inputName.toLowerCase() === current.name.toLowerCase()) {
          return { ...current, counter: ++accum.counter };
        }

        return accum;
      },
      { counter: 0, name: inputName.toLowerCase() }
    );

  console.log(results);

  alert("Edad promedio", Math.floor(results.inputName / counter));*/
  console.log(results);
}

fetchStudents();
loadStudents();

btnReduce.addEventListener("click", reduce);
