// Funções anônimas

// Funções anônimas são funções que pode ser armazenadas em uma variável, fazendo com que elas possam mudar de nome varias vezes, alterando sua função de variável para variável

// Função comum
function sum(first_number, second_number) {
  return first_number + second_number;
}

// Função armazenada em uma variável
let math_operation = function (first_number, second_number) {
  return first_number + second_number;
};

console.log(math_operation(2, 2));

math_operation = function (first_number, second_number) {
  return first_number - second_number;
};

console.log(math_operation(2, 2));

hello_world();

function hello_world() {
  console.log("Hello world!");
}

const hi_world = function () {
  console.log("Hi World");
};

hi_world();

// Funções anônimas tem o mesmo defeito que variáveis const e let, já que são armazenadas em variáveis seus dados tem que ser declarados corretamente para evitar erros.
