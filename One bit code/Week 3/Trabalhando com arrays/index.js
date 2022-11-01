let shooping_list = ["Arroz", "Feijão", "Batata", "Carne", "Frango"];
console.log(shooping_list);
// Adicionando elementos

// push
// O push é usado para adicionar elementos no final do array, o elemento vai ser empurrado ao final da fila do array

let length = shooping_list.push("Goiaba");
console.log(shooping_list);
console.log("Goiaba was add in the end of your shooping list");
console.log(length);

// unshift
// O unshift vai adicionar um elemento ao inicio do array
length = shooping_list.unshift("Maracuja");
console.log(shooping_list);
console.log("Maracuja was add in the beggining of your shooping list");
console.log(length);

// Remover elementos

//pop
// O pop vai remover o elemento do final do array

let array_last_element = shooping_list.pop();
console.log(shooping_list);
console.log(
  `(${array_last_element}) This was the last alement on your shooping list`
);

//shift
// O shift vai remover o elemento do inicio do array
array_last_element = shooping_list.shift();
console.log(
  `(${array_last_element}) This was the first element on your shooping list`
);
console.log(shooping_list);

//Pesquisar um elemento

//include
// O include vai pesquisar por string se o elemento está presente em um array, e retornar com um valor boleano
let its_on_array = shooping_list.includes("Feijão");
console.log(its_on_array);

//indexOf
// O indexOf vai indicar o indice em que algum elemento está presente, o elemento também vai ser indicado por string
let shooping_list_index = shooping_list.indexOf("Batata");
console.log(shooping_list_index);

//slice
// O slice vai cortar uma parte do array, cortando de uma parte sobrando o resto, ou com dois cortes indicados pelo indece, o indice do inicio do corte e o indice do final do corte.
let meat = shooping_list.slice(3, 6);
let not_meat = shooping_list.slice(0, 3);
console.log(`That is the meat on your shooping list ${meat}`);
console.log(`That is the not meat food on your shooping list ${not_meat}`);

//concat

let concat = meat.concat(not_meat, "Something");
console.log(concat);

//Invertido
// Os indicadores por indece também aceitam valores negativos, esses valores negativos são contados pra trás fazendo com que -1 seja o ultimo valor do array e se continuar contando -2 o penultimo...
let others = shooping_list.slice(-4, -2);
console.log(others);

// Substituição

// splice
// O splice vai remover algum elemento determinado por indice e em seguida se for pedido subistituir esse elemento por outro indicado, esse elemento indicado pode subistituir um ou mais elemento já que o indice indicado pode ser igual a um slice(corte) definindo o inicio e o fim do corte
const removed_elements = shooping_list.splice(
  shooping_list_index,
  1,
  "Batata doce"
);
console.log(shooping_list);
console.log(removed_elements);

//Iterar sobre os elementos
// Para trabalhar com arrays e passar por cada um deles podemos usar as estruturas de repetição assim com abaixo
for (let index = 0; index < shooping_list.length; index++) {
  let element = shooping_list[index];
  console.log(`${element} it's found in the position ${index}`);
}
