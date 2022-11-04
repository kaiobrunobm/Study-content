"use strict";
// //Array bidimensional
// Arrays bidimensionais são arrays que armazenam outros arrays, e que esses outros arrays podem armazenar outros arrays, e esses arrays bidimensionais podem ser manuseados e usados no código.
const array = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  [],
];

// // Array
console.log(array);
// // Array dentro de arrayu
console.log(array[0]);
console.log(array[1]);
// // Elementos do array dentro do array
console.log(array[1][0]);
// // Array dentro do array que tem outro array
// // Elemento dentro do array que está no array dentro de outro array
console.log(array[2][0][0]);
console.log(array[2][1][0]);

// Outro array
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

// matriz.push(["l4"]);
// matriz[0].push("c5");
// console.table(matriz);

// Iterar sobre arrays bidimensionais

for (let index = 0; index < matriz.length; index++) {
  for (
    let second_index = 0;
    second_index < matriz[index].length;
    second_index++
  ) {
    const element = matriz[index][second_index];
    console.log(element);
  }
}
