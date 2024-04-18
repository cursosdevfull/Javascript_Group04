const rolesAllowed = ["admin", "operator"];

function isAllowed(role) {
  message.textContent =
    rolesAllowed.indexOf(role) >= 0
      ? `User authorized: ${role}`
      : `Unauthorized: ${role}`;
}

btnAdmin.addEventListener("click", isAllowed.bind(this, "admin"));
btnOperator.addEventListener("click", isAllowed.bind(this, "operator"));
btnAnonymous.addEventListener("click", isAllowed.bind(this, "anonymous"));
