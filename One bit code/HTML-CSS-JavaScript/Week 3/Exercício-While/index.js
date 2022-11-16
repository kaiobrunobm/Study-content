const turist_name = prompt("Enter your name", "");
let visit_city_check = confirm("Have you visited any city as a turist?");
let visited_cities_list = "";
let score = 0;

while (visit_city_check === true) {
  let visited_cities = prompt("What city have you visited?", "");
  visited_cities_list += " - " + visited_cities + "\n";
  visit_city_check = confirm("Have you visited any other city?");
  score++;
  if (visit_city_check === false) {
    alert(
      `${turist_name} You have visited ${score} cities.\n${visited_cities_list}`
    );
    break;
  }
}
