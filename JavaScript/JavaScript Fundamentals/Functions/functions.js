"use strict";
/*
//function syntax
function showMessage(){
    alert("Hello world of JAVASCRIPT!");
}
showMessage();
showMessage();

//function local variables

function showMessage(){
    let message = "Hello world of JAVASCRIPT!";
    alert(message);
}
showMessage();

alert(message);//This variables did not exist outside the function

//function auter variables

let userName = prompt("Enter your username:", "");

function showMyName() {
    alert(`Hello, ${userName}`);
}
showMyName();


//parameters
let userName = prompt("Enter your username:", "");
function showMessage(from, text) {
    alert(from + ': ' + text);
}

showMessage(`${userName}`, "Hello");


//text parameters was not specified

function showText(from, text = "The text was not specified") {
    alert(from + ': ' + text);
}

showText("Hello");


//alternative default parameters

function showMessage(text) {
    // ...
    if (text === undefined) { // if the parameter is missing
        text = 'empty message';
    }
    
    alert(text);
    }
showMessage()

function showMessage(text) {
    text = text || 'empty';
    alert(text);
}
showMessage();


function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0); 
showCount(null); 
showCount();


//return to function

function checkAge(age){
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permissiton to be here?");
    }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)){
    alert('Access granted');
} else {
    alert('Access denied');
}


//task

function checkAge(age) {
    return (age >= 18) ? true : confirm("do you have permissiton to be here?");
}
checkAge(11);


function checkAge(age){
    return (age >= 18) || confirm("do you have permissiton to be here?");
}
checkAge(11);


//task

function returnNumber(number1, number2) {
    return alert(number1 < number2 ? number1 : number2);

}
returnNumber(23,22);


//task
function calcNumbers(number1, number2) {
    let result = number1;
    
    for (let i = 1; i < number2; i++){
        result *= number1;
    }
    return result;
}

let number1 = prompt("Enter a number:");
let number2 = prompt("Enter a second number:");

if (number2 < 1){
    alert(`This ${number2} is not supported, use a positive number`)
} else {
    alert(calcNumbers(number1, number2));
}
*/