function add_contact() {
  const contacts_section = document.querySelector("#all-contacts");

  const ul = document.createElement("ul");

  const li_name = document.createElement("li");
  li_name.innerText = "Name: ";
  const li_name_input = document.createElement("input");
  li_name_input.type = "text";
  li_name_input.name = "fullname";

  li_name.appendChild(li_name_input);
  ul.appendChild(li_name);
  ul.appendChild(document.createElement("br"));

  const li_phone = document.createElement("li");
  li_phone.innerText = "Phone: ";
  const li_phone_input = document.createElement("input");
  li_phone_input.type = "number";
  li_phone_input.name = "phonenumber";

  li_phone.appendChild(li_phone_input);
  ul.appendChild(li_phone);
  ul.appendChild(document.createElement("br"));

  contacts_section.appendChild(ul);
}

function delete_contact() {
  const contacts_section = document.querySelector("#all-contacts");

  const contacts = document.querySelectorAll("ul");

  contacts_section.removeChild(contacts[contacts.length - 1]);
}
