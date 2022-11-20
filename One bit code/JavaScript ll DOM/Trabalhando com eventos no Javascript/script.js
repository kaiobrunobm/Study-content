function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordCofirmation = sectionElement.children.passwordCofirmation.value;

  if (password === passwordCofirmation) {
    alert(`The user ${username} has been successfully registered`);
  } else {
    alert("The passwords don't match");
  }
}

const register_button = document.getElementById("register-button");
register_button.addEventListener("click", register);
