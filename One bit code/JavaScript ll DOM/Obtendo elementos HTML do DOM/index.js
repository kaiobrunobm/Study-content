function show() {
  const contact_list = document.getElementById("contact-list");
  console.log(contact_list);

  const li_elements = document.getElementsByTagName("li");
  console.log(li_elements);

  const contact_input = document.getElementsByClassName("contact-input");
  console.log(contact_input);

  const contacts = document.querySelectorAll(".contact-input");
  console.log(contacts);

  const something = document.querySelector("ul > li > label");
  console.log(something);
}
