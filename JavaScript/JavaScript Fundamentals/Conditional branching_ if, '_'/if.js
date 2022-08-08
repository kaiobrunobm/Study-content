'use strict';
/*
let promptNumber = prompt('Enter a number:','');
promptNumber = Number(promptNumber);
if (promptNumber > 0) {
    alert('1');
} else if (promptNumber < 0) {
    alert('-1');
} else {
    alert('0');
}

let a, b;
a = 2
b = 1
let result = (a + b < 4) ? 'Below': 'Over';
alert(result);*/
let login = prompt('Enter a login:','');
let loginMessage = (login == 'Employee') ? 'Hello' : 
                    (login == 'Director') ? 'Greetings' : 
                    (login == '') ? 'Not allowed' : 
                    'This user do not exist';
alert(loginMessage);