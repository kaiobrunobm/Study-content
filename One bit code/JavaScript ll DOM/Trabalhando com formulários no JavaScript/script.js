const form = document.getElementById("order-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("input[name = 'name']").value;
  const address = document.querySelector("input[name = 'address']").value;
  const bread_type = document.querySelector(
    "select[name = 'bread-type']"
  ).value;
  const radio_select = document.querySelector(
    "input[name = 'main']:checked"
  ).value;
  const observations = document.querySelector(
    "textarea[name = 'observations']"
  ).value;

  let salad = "";
  document
    .querySelectorAll("input[name = 'salad']:checked")
    .forEach(function (item, index) {
      salad += ` ${index + 1} - ${item.value}`;
    });

  console.log({ name, address, bread_type, radio_select, observations, salad });
});
