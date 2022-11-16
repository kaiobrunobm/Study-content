// Escopo
// Escopo são as seções das {} em um código, cada escopo tem suas regras

// Uma variável criada no escopo maior (no caso fora de qualquer {}) pode ser usada em um escopo menor
let pokemon = "Pikachu";

function evolution() {
  // Alterando o valor da variável criada no escopo maior
  pokemon = "Raichu";
}

console.log(pokemon); // Primeiro resultado da variável
evolution(); // chamado da função que vai alterar a variável
console.log(pokemon); // resultado da variável depois de alterada

// Variavel criada no escopo menor
function create_animal() {
  let animal = "Cat";
}

// create_animal(); // Tentativa de chamar a função para criar a variável
// console.log(animal); // Variável não existente no escopo maior

function school(grade) {
  if (grade > 6) {
    //Variáveis criadas com let e var em um escopo menor nivel 2
    var aproved = true;
    let result = "Aproved";
  } else {
    var aproved = false;
    let result = "Reproved";
  }

  console.log(grade);
  console.log(aproved); //Variável com var existente no escopo nivel 1
  // console.log(result); // Variável com let não existente
}
school(4);
console.log(aproved); // Variável no escopo nivel 0 não existente mesmo sendo criada com var pelo motivo de que uma função é um escopo mais fechado existente.

console.log(name);

var name = "Kaio";

// O uso do var é desaconselhado por esse motivo, uma variável criada dentre de um escopo menor não pode interfirir no resto do código.
