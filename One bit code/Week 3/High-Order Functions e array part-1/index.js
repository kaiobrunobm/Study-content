const characters = [
  { level: 28, character_name: "Graall", race: "Choosen", class: "Prist" },
  { level: 26, character_name: "Dorm", race: "Choosen", class: "Prist" },
  { level: 18, character_name: "Harad", race: "Choosen", class: "Paladin" },
  {
    level: 14,
    character_name: "Villeplume",
    race: "Mountain Clã",
    class: "Xamã",
  },
  { level: 6, character_name: "Sorb", race: "Elf", class: "Prist" },
  { level: 32, character_name: "Gloom", race: "Elf", class: "Druid" },
  { level: 30, character_name: "Oddish", race: "Choosen", class: "Paladin" },
];
// Map

// O map é um high order function que vai separar algum dado informado do objeto acima e trasformar em uma array
/*
const character_names = [];
for (let index = 0; index < characters.length; index++) {
  character_names.push(characters[index].character_name);
}

function push_names(character) {
  return character.character_name;
}
const character_names = characters.map(push_names);
console.log(character_names);
*/

// Filter

// O filter vai pegar um determinado dado que no caso aqui a baixo foi a raça e dividir todos os objetos que tem esse dado e separalos/fultralos.
/*
const elfs = [];
for (let index = 0; index < characters.length; index++) {
  if (characters[index].race === "Elf") {
    elfs.push(characters[index]);
  }
}
console.log(elfs);

const elfs = characters.filter(function (character) {
  return character.race === "Elf";
});

console.log(elfs);
*/

// Reduce

// O reduce vai pegar algum dado informado dos objetos e vai transformalos em alguma outra coisa, aqui abaixo temos 2 usos do reduce, um ele transformou os dados extraidos do array em um dado de tipo number, e no outro ele pegou os dados informados no array e transformou em um objetos com arrays com divisões mais organizadas que no caso aqui foram a raça.

/*
const total_level = characters.reduce(function (total_value, character) {
  return total_value + character.level;
}, 0);

console.log(total_level);

const races = characters.reduce(function (total_value, character) {
  if (total_value[character.race]) {
    total_value[character.race].push(character);
  } else {
    total_value[character.race] = [character];
  }

  return total_value;
}, {});

console.log(races);
*/

// Sort

// O sort é usada para organização crescente e decrescente o array.
/*
const ordered_characters = characters
  .slice()
  .sort(function (character_a, character_b) {
    return character_b.level - character_a.level;
  });

console.log(ordered_characters);
console.log(characters);
*/

const races = characters.reduce(function (total_value, character) {
  if (total_value[character.race]) {
    total_value[character.race].push(character);
  } else {
    total_value[character.race] = [character];
  }

  return total_value;
}, {});

console.log(races);
