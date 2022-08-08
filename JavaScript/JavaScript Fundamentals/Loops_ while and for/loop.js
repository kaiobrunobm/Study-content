"use strict";
//while
/*
let loop = prompt('Enter a number lower than 3')
while (loop < 10) {
    alert(loop);
    loop++;
}

//do while
let number = prompt("Enter a number lower than 3");
do{
    alert(number);
    number++;
} while (number < 3);

//for
for (let loop = prompt("Enter a Number lower than 3"); loop < 3; loop++) {
    alert(loop);
}
//for variable error
for (let number = 0; number < 3; number++) {
    alert(number);
}
alert(number);//Variável não encontrada, já que foi declarada dentro do loop.

//break loop

let promptNumber = +prompt("Enter a number lower than 10:");
while(promptNumber < 10) {
    alert(promptNumber);
    promptNumber++;
    if(promptNumber >= 10)break;

//continue loop

for (let number = prompt("Enter a number lower than 10:"); number < 10; number ++) {
    if (number % 2 == 0) continue;
    alert(number);
}}

//loop labels
let promptNumber =  prompt("Enter a number lower than 10:");

LowerTen: while(promptNumber < 10) {
    alert(promptNumber);
    promptNumber++;
    if(promptNumber >= 10)break LowerTen;
}
alert("You must enter a number or this Number must be lower than 10");

//Task for

for (let loopNumber = prompt("Enter a number lower than 10:"); loopNumber <= 10; loopNumber++){
    if(loopNumber % 2 == 0) continue;
    alert(loopNumber);
}

//Task replace for to while

let whileNumber = prompt("Enter a while number lower than:")

while (whileNumber < 3) {
    alert(`Number ${whileNumber}`);
    whileNumber++;
}

//Task until the input is correct

let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let number = 10;

nextPrime : for (let primeNumber = 2; primeNumber <= number; primeNumber++) {
    for (let divisor = 2; divisor < primeNumber; divisor++) {
        if (primeNumber % divisor == 0) continue nextPrime;
    }
    alert(primeNumber);
}*/