'use strict';
/*
let officeHour = prompt('What time is it?', '');
// officeHour = String(officeHour);

if (officeHour < 8 || officeHour > 18) {
    alert("The office it's closed.");
} else {
    alert("The office it's open");
}

let firstName = prompt("Enter your first name:", "");
let lastName = prompt("Enter your last name:", '');
let nickName = prompt("Enter your nickname:", '');

alert( firstName || lastName || nickName || "Anonymous");

let hour = prompt("Enter your hour:", "");
let minute = prompt("Enter your minute:", "");

if (hour == 12 && minute == 30) {
    alert("It's 12:30");
}*/

let login = prompt('Enter your login:', '');

if (login == 'Admin') {
    let password = prompt('Enter your password:', ''); {
        if (password == 'TheMaster'){
            alert('Welcome sir!');
        } else if (password == '') {
            false;
        } else {
            alert('This is not your password!')
        }
    }
} else if (login == '') {
    false;
} else {
alert("You don't have a account to login");
}