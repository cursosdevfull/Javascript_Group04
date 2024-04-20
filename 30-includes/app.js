const rolesAllowed = ["admin", "operator"];

function isAllowed(role) {
  message.textContent = rolesAllowed.includes(role)
    ? `User authorized: ${role}`
    : `Unauthorized: ${role}`;
}

btnAdmin.addEventListener("click", isAllowed.bind(this, "admin"));
btnOperator.addEventListener("click", isAllowed.bind(this, "operator"));
btnAnonymous.addEventListener("click", isAllowed.bind(this, "anonymous"));
