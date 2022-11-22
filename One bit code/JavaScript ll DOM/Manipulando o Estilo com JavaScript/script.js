function dark_theme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}
function light_theme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function switch_theme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("dark-btn").addEventListener("click", dark_theme);
document.getElementById("light-btn").addEventListener("click", light_theme);
document.getElementById("switch-btn").addEventListener("click", switch_theme);
