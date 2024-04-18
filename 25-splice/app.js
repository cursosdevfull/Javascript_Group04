let users = [];

function createUsers() {
  for (let i = 1; i <= 20; i++) {
    let user = {
      id: i,
      name: `user${i.toString().padStart(2, "0")}`,
      lastname: `user${i.toString().padStart(2, "0")}_lastname`,
      age: 20,
    };
    users.push(user);
  }
}

function clearRender() {
  elements.innerHTML = "";
}

function removeElement(index) {
  const canIdelete = confirm("¿Realmente quieres eliminar este elemento?");
  if (canIdelete) {
    console.log("element removed", index);
    users.splice(index, 1, { id: 0, name: "", lastname: "", age: 0 });

    clearRender();
    renderUsers();
  }
}

function renderUsers() {
  //for (const user of users) {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = user.id;

    const td2 = document.createElement("td");
    td2.textContent = user.name;

    const td3 = document.createElement("td");
    td3.textContent = user.lastname;

    const td4 = document.createElement("td");
    td4.textContent = user.age;

    const button = document.createElement("button");
    button.textContent = "remove";
    button.addEventListener("click", removeElement.bind(this, index));

    const td5 = document.createElement("td");
    td5.append(button);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    elements.append(tr);
  }
}

createUsers();
renderUsers();
