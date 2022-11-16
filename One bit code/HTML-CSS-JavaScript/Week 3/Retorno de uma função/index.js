// Return
// O return vai para retornar o valor do resultado de alguma código presente da função, tem as caracteristicas de um break já que tudo abaixo desse return é ignorado.
function calc_average(fisrt_number, second_number) {
  const average = fisrt_number + second_number / 2;
  return average;
}

const result = calc_average(2, 2);

console.log(result);

function creat_product(name, price) {
  const product = {
    name,
    price,
  };

  return product;
}

const notebook = creat_product("Macbook air m1", 10000);
console.log(notebook);

function area_retangular(base, altura) {
  const area = base * altura;
  return area;
}

console.log(area_retangular(3, 5));

function square_area(lado) {
  return area_retangular(lado, lado);
}

console.log(square_area(4));

function hello() {
  let text = "something";
  return text;
  text = "hello world";
  console.log(text);
}

console.log(hello());

// Varios returns
// O unico motivo pra ter varios returns em uma função, é quando dentro dessa função ter uma condição, ou seja, se resultado = x, return algo, se não return isso.
function maioriade(age) {
  if (age >= 18) {
    return "Maior de idade ";
  } else {
    return "Menor de idade";
  }
}

console.log(maioriade(18));
console.log(maioriade(12));
