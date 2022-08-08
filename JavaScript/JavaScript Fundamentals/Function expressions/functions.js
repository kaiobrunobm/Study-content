"use strict";
/*
let sayHi =  function() {
    alert("Hello");
}
sayHi();


//callback functions
function askQuestion(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showConfirm() {
    alert("You agreed.");
}

function showCancel() {
    alert("You disagreed the question");
}

askQuestion("Do you agree?", showConfirm, showCancel);

//callback functions with function expressions.
function askQuestion(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
askQuestion("Do you agree?",
        function() {alert("You agreed.")},
        function() {alert("You didn't agree!");}
)

//fuction outside of if statement

let agePrompt = prompt("How old are you?", "");
let ageFunction;

if (agePrompt < 18) {
    ageFunction = function(){
        alert("Hello");
    };
} else {
    ageFunction = function(){
        alert("Greetings");
    };
}

ageFunction();


//arrow functions

let age = prompt("Your age:", "")

let message = (age < 18) ? 
    () => alert("Hello"):
    () => alert("Greetings");

message();


// multilines arrow functions 

let sum = (a, b) => {
	let result = a + b;
	return result;
};

alert( sum(1, 2));


// task rewrite functions with arrow functions
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
    return ask;
}

ask (
    "Do You agree?",
    () =>  alert("You agreed."),
    () => alert("You didn't agree.")
);
*/
