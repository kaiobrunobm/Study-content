function create_element() {
  const div = document.querySelector("#test-div");
  const span = document.createElement("span");
  span.className = "element";
  div.appendChild(span);
}

let value = "";
let has_element = function has_element() {
  const div = document.querySelector("#test-div > span");
  if (div.classList.contains("element")) {
    value = true;
    return;
  } else if (div.classList.contains("element-1")) {
    value = false;
    return;
  }
  if (value === true) {
    console.log("true win");
  } else if (value === false) {
    console.log("false win");
  }
};

document.querySelector(".button-2").addEventListener("click", create_element);
document.querySelector(".button").addEventListener("click", has_element);
