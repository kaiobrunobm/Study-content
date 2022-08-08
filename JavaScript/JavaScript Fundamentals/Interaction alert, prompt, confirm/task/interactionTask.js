'use strict';

let currentlyUserName = prompt("What is your name?", '');
let currentlyUserUsername = confirm(`Your username gona be ${currentlyUserName}, ok?`);

if (currentlyUserUsername == true) {
    alert(`Your username ${currentlyUserUsername}`);
} else {
    let username = prompt("Please enter your username", '');
    alert(`Your username ${username}`);
}