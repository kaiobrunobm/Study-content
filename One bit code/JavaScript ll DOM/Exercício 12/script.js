const register_button = document.getElementById("register-btn");

function create_input(type, className, name, id, value) {
  const input = document.createElement("input");
  input.type = type;
  input.className = className;
  input.name = name;
  input.id = id;
  input.value = value;

  return input;
}

function create_label(className, htmlFor, innerText) {
  const label = document.createElement("label");
  label.className = className;
  label.htmlFor = htmlFor;
  label.innerText = innerText;

  return label;
}

register_button.addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.getElementById("form");
  const new_inputs_div = document.createElement("div");
  new_inputs_div.className = "mb-3";

  const label = document.createElement("label");
  label.className = "form-label";
  label.setAttribute("for", "technology-name");
  label.innerText = "Work technology";

  const input = document.createElement("input");
  input.className = "form-control";
  input.id = "technology-name";
  input.name = "technology-name";

  new_inputs_div.append(label, input);

  const radio_div = document.createElement("div");
  radio_div.className = "mb-5";

  const radio_section_title = document.createElement("h1");
  radio_section_title.className = "mb-3 display-5";
  radio_section_title.innerText = "Experience Time";

  const first_radius_option_div = document.createElement("div");
  first_radius_option_div.className = "form-check mt-3";

  const first_radius_option_label = create_label(
    "form-check-label",
    "option-1",
    " 0-2 Years"
  );

  const first_radius_option = create_input(
    "radio",
    "form-check-input",
    "radio-options",
    "option-1",
    "0-2 Years"
  );

  first_radius_option_div.append(
    first_radius_option_label,
    first_radius_option
  );

  const second_radius_option_div = document.createElement("div");
  second_radius_option_div.className = "form-check mt-3";

  const second_radius_option_label = create_label(
    "form-check-label",
    "option-2",
    " 3-4 Years"
  );

  const second_radius_option = create_input(
    "radio",
    "form-check-input",
    "radio-options",
    "option-2",
    "3-4 Years"
  );

  second_radius_option_div.append(
    second_radius_option_label,
    second_radius_option
  );

  const third_radius_option_div = document.createElement("div");
  third_radius_option_div.className = "form-check mt-3";

  const third_radius_option_label = create_label(
    "form-check-label",
    "option-3",
    " 5+ Years"
  );

  const third_radius_option = create_input(
    "radio",
    "form-check-input",
    "radio-options",
    "option-3",
    "5+ Years"
  );

  third_radius_option_div.append(
    third_radius_option_label,
    third_radius_option
  );

  const confirm_button = document.createElement("button");
  confirm_button.className = "btn btn-success mt-3 mx-2";
  confirm_button.setAttribute("type", "reset");
  confirm_button.innerText = "Confirm";
  confirm_button.addEventListener("click", function (event) {
    event.preventDefault();

    const name_input = document.querySelector("input[name= 'name']");
    const work_technology = document.querySelector(
      "input[name = 'technology-name']"
    ).value;
    const time_experience = document.querySelector(
      "input[name = 'radio-options']:checked"
    ).value;

    const name = name_input.value;

    name_input.value = "";

    radio_div.remove(
      radio_section_title,
      first_radius_option_div,
      second_radius_option_div,
      third_radius_option_div,
      confirm_button,
      cancel_button
    );

    new_inputs_div.remove(label, input);
    register_button.style.display = "block";

    console.log({ name, work_technology, time_experience });
  });

  const cancel_button = document.createElement("button");
  cancel_button.className = "btn btn-danger mt-3 mx-2";
  cancel_button.setAttribute("type", "submit");
  cancel_button.innerText = "Cancel";
  cancel_button.addEventListener("click", function (event) {
    event.preventDefault();
    radio_div.remove(
      radio_section_title,
      first_radius_option_div,
      second_radius_option_div,
      third_radius_option_div,
      confirm_button,
      cancel_button
    );

    new_inputs_div.remove(label, input);

    register_button.style.display = "block";
  });

  radio_div.append(
    radio_section_title,
    first_radius_option_div,
    second_radius_option_div,
    third_radius_option_div,
    confirm_button,
    cancel_button
  );

  form.append(new_inputs_div, radio_div);

  register_button.style.display = "none";
});
