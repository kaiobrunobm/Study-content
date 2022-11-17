function add_player() {
  const inputs_div = document.querySelector("#inputs-div");

  const players_info_title = document.createElement("h2");
  players_info_title.className = "display-2 mb-5";
  players_info_title.innerText = "Informações do Jogador";

  const input_player_position = document.createElement("input");
  input_player_position.type = "text";
  input_player_position.className = "form-control";
  input_player_position.placeholder = "Posição do Jogador";

  const input_player_name = document.createElement("input");
  input_player_name.type = "text";
  input_player_name.className = "form-control mt-3";
  input_player_name.placeholder = "Nome do Jogador";

  const input_player_number = document.createElement("input");
  input_player_number.type = "number";
  input_player_number.className = "form-control mt-3";
  input_player_number.placeholder = "Número do Jogador";

  const button_confirm_lineup = document.createElement("button");
  // button_confirm_lineup.addEventListener("click", confirm_lineup);
  button_confirm_lineup.type = "button";
  button_confirm_lineup.className = "btn btn-success mt-3";
  button_confirm_lineup.innerText = "Escalar";

  inputs_div.append(
    players_info_title,
    input_player_position,
    input_player_name,
    input_player_number,
    button_confirm_lineup
  );
}
