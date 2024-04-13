const student = {
  name: "Joaquín",
  lastname: "Jimenez",
  fullname: function () {
    return `${this.lastname} ${this.name}`;
  },
};

const teacher = {
  name: "Yolanda",
  lastname: "Arguedas",
  fullname: function () {
    return `${this.name} ${this.lastname}`;
  },
};

const ftnFullname = teacher.fullname.bind(student);

/*const ftnFullname = function () {
  return `${this.name} ${this.lastname}`;
};*/

console.log("name", student.name);
console.log("lastname", student.lastname);
console.log("fullname", ftnFullname());
