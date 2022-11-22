const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === "" ? "Something" : "";
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  input.className =
    input.type === "radio" ? "form-check-input" : "form-control";
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Type Something";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log(`O valor do atributo data-something-else é ${data}`);
});
