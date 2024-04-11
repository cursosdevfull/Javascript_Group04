"use strict";

const student = {
  name: "Luis",
  lastname: "Restrejo",
  fullname: function (status, email) {
    console.log("this", this);
    return `${this.name} ${this.lastname}: status: ${status}: email:${email}`;
  },
  currentDate: new Date(),
};

const member = {
  name: "Sara",
  lastname: "Lozada",
  fullname: function (status, email) {
    return `${this.name} ${this.lastname}`;
  },
  currentDate: new Date(),
};

const newFunction = student.fullname.bind(member, "married");

console.log(newFunction("sergio@email.com"));
