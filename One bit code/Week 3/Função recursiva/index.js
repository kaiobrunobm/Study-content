// Funções recursicas
// Funções recursivas sõa funções que retorna ela mesmo
function divide(number) {
  console.log(number);
  if (number % 2 === 0) {
    divide(number / 2);
  } else {
    return number;
  }
}

// Por exemplo nessa função acima, a gente vai chamar a função que se o não for igual a 0 ele vai divir por 2, e essa função vai continuar sendo chamada até que o valor seja igual a 0.
let number = parseFloat(prompt("Enter a number to divide"));

// divide(number);

function fatorial(number) {
  console.log(`Number : ${number}`);
  if (number === 0) {
    return 1;
  } else if (number === 1) {
    return 1;
  } else {
    console.log(`${number} !${number - 1}`);
    return number * fatorial(number - 1);
  }
}

console.log(fatorial(number));
