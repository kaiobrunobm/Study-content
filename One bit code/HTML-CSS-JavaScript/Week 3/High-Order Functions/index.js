// High Order functions

// Essas funções são funções onde o terceiro parametro de um função é outra função

// Essa função foi criada com 3 parâmetros, e uma dela é um função, nesse caso essa função se chama operation
function calc(fisrt_number, second_number, operation) {
  console.log("Doing a doperation");
  const result = operation(fisrt_number, second_number); // Aqui chamamos a função não existente ainda e entramos com 2 parâmetros dentro do terceiro parametro
  return result;
}

// Criamos algumas função que podem ser usadas como parametros, nesse caso temos função de operações matemáticas que precisam apenas de 2 parâmetros para funcionar
function sum(fisrt_number, second_number) {
  console.log("Doing a sum operation");
  return fisrt_number + second_number;
}

function subs(fisrt_number, second_number) {
  console.log("Doing a substraction operation");
  return fisrt_number - second_number;
}

function divide(fisrt_number, second_number) {
  console.log("Doing a divide operation");
  return fisrt_number / second_number;
}

console.log(calc(5, 5, divide)); // Aqui chamamos a function high order, e adicionamos uma das funções criada, qualquer uma vai funcionar já que criamos exatamente para isso.

// podemos criar uma função anônima para ser usada de parâmetro, mas é claroa que ela tem que ser criada de acordo com as necessidades da high order function
console.log(
  calc(5, 5, function (fisrt_number, second_number) {
    console.log("Doing a multiplication operation");
    return fisrt_number * second_number;
  })
);
// Outro exemplo

// Aqui criamos uma array
const list = ["Apple", "Banana", "Orange", "Lime"];

// Criamso uma função high order para passar por cada elemento do array atraves de um indice(criado abaixo) e no final dá um console.log no elemnto no indice e no array novamente
function show_element(element, index, array) {
  console.log({ element, index, array });
}

// Criando o indice e chamando a high order function para passar por cada elemento do array atraves do indice.
for (let index = 0; index < list.length; index++) {
  show_element(list[index], index, list);
}

// Para comprovar que tudo que fizemos acima é uma high order function, o proprio javascript já tem existente uma high order function para fazer o que a gente programou acima.
list.forEach(show_element); //podendo chamar um função já criada ...

// ... Ou um função anônima.
list.forEach(function (element, index, array) {
  console.log({ element, index, array });
});
