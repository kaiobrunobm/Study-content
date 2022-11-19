function add_player() {
  const input_player_name = document.getElementById("player-name").value;
  const input_player_number = document.getElementById("player-number").value;
  const input_player_position =
    document.getElementById("player-position").value;

  const confirm_button = confirm("As informações do jogador está correta?");

  if (
    (confirm_button === true && input_player_name !== null) ||
    input_player_number !== null ||
    input_player_position !== null
  ) {
    const table = document.querySelector("#oficial-team > table > tbody");
    const tr = document.createElement("tr");
    tr.id = input_player_number;

    const th_player_number = document.createElement("th");
    th_player_number.innerText = input_player_number;
    th_player_number.setAttribute("scope", "row");
    th_player_number.className = "text-center";

    const td_player_name = document.createElement("td");
    td_player_name.innerText = input_player_name;
    td_player_name.className = "text-center";

    const td_player_position = document.createElement("td");
    td_player_position.innerText = input_player_position;
    td_player_position.className = "text-center";

    table.appendChild(tr);
    tr.append(th_player_number, td_player_name, td_player_position);
  } else if (
    input_player_name === null ||
    input_player_number === null ||
    input_player_position === null
  ) {
    alert(
      "A escalação do jogador foi cancelada, os dados podem está incompletos"
    );
  }
}

function remove_player() {
  const input_player_number_remove = document.getElementById(
    "input-player-number-remove"
  );
  const choosed_player = document.getElementById(
    input_player_number_remove.value
  );
  const tbody = document.querySelector("#oficial-team > table > tbody");
  // const th = document.querySelector("#oficial-team > table > tbody > th");

  tbody.removeChild(choosed_player);
}
