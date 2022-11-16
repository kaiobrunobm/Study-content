// Variables

// First character
alert(
  "Informs about the first character, this going to atack the other character"
);
let first_character_name = prompt("Enter the name of your character");
let first_character_damage = parseFloat(
  prompt("How mutch damage you character has?")
);
let first_character_health = parseFloat(
  prompt("How mutch health you character has?")
);
let first_character_defense = parseFloat(
  prompt("How mutch defense you character has?")
);
let first_character_shild = confirm("Your character has a shild?");
const first_character_data = [
  first_character_name,
  first_character_damage,
  first_character_health,
  first_character_defense,
  first_character_shild,
];

// Second character
alert(
  "Informs about the second character, this going to defense the defense the atack of the first character"
);
let second_character_name = prompt("Enter the name of your character");
let second_character_damage = parseFloat(
  prompt("How mutch damage you character has?")
);
let second_character_health = parseFloat(
  prompt("How mutch health you character has?")
);
let second_character_defense = parseFloat(
  prompt("How mutch defense you character has?")
);
const second_character_shild = confirm("Your character has a shild?");
let second_character_data = [
  second_character_name,
  second_character_damage,
  second_character_health,
  second_character_defense,
  second_character_shild,
];

// // Battle
let damage = 0;
let final_health = 0;
if (
  first_character_data[1] > second_character_data[3] &&
  second_character_data[4] === false
) {
  damage = first_character_data[1] - second_character_data[3];
  final_health = second_character_data[2] - damage;
  alert(
    `The ${first_character_data[0]} take down ${damage} of damage against the ${second_character_data[0]}, Now ${second_character_data[0]} atual health is ${final_health}HP `
  );
} else if (
  first_character_data[1] > second_character_data[3] &&
  second_character_data[4] === true
) {
  damage = first_character_data[1] - second_character_data[3] / 2;
  final_health = second_character_data[2] - damage;
  alert(
    `The ${first_character_data[0]} take down ${damage} of damage against the ${second_character_data[0]}, Now ${second_character_data[0]} atual health is ${final_health}HP`
  );
} else {
  alert(
    `The ${first_character_data[0]} take down ${damage} of damage against the ${second_character_data[0]}, Now ${second_character_data[0]} atual health is ${second_character_data[2]}HP`
  );
}
