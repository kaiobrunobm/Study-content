function add_input() {
  const ul = document.querySelector("#inputs");

  const new_li = document.createElement("li");
  new_li.className = "created_li";
  new_li.innerText = "New Input:";

  const new_input = document.createElement("input");
  new_input.type = "text";
  new_input.name = "input-text";
  new_input.id = "input-id";
  new_li.appendChild(new_input);
  ul.appendChild(new_li);
}
