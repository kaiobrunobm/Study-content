function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`The user ${username} has been successfully registered`);
  } else {
    alert("The passwords don't match");
  }
}

const register_button = document.getElementById("register-button");
register_button.addEventListener("click", register);

function removeEvent() {
  register_button.removeEventListener("click", register);
  alert("The event has been removed");
}

register_button.addEventListener("mouseover", function (event) {
  console.log(event.currentTarget);
});
