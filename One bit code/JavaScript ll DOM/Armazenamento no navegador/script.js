// Session storage
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const session_storage_info = sessionStorage.getItem("info");
  alert(`In the session storage the data is : ${session_storage_info}`);
});

// Local storage

document.getElementById("localBtn").addEventListener("click", function () {
  const local_storage_data_input = document.getElementById("local");
  localStorage.setItem("Local Info", local_storage_data_input.value);
});

document.getElementById("readLocal").addEventListener("click", function () {
  const local_storage_info = localStorage.getItem("Local Info");
  alert(`In the local storage the data is : ${local_storage_info}`);
});

// Cookies

document.getElementById("cookieBtn").addEventListener("click", function () {
  const cookie_input_data = document.getElementById("cookie");
  const cookie_string = "First info =" + cookie_input_data.value + ";";
  const expiration = "expires" + new Date(2022, 9, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie_string + expiration + path;
  cookie_input_data.value = "";
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const cookie_input_data = document.getElementById("cookie2");
  const cookie_string = "Second info =" + cookie_input_data.value + ";";
  const expiration = "expires" + new Date(2022, 9, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie_string + expiration + path;
  cookie_input_data.value = "";
});
