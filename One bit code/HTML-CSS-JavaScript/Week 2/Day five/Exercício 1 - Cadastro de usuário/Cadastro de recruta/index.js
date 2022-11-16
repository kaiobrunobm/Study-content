const todays_date = new Date();
const todays_year = todays_date.getFullYear();

let first_name, second_name, study_field, birth_year;

first_name = prompt("Enter your first name", "");
second_name = prompt("Enter your second name", "");
study_field = prompt("What is your study field", "");
birth_year = prompt("When was your birth year", "");

// User age
let age = birth_year - todays_year;
let user_age = Math.abs(age);

// User full name
let user_full_name = `${first_name} ${second_name}`;

//Perfil
alert(
  `Hi ${user_full_name}, you wanna be a ${study_field} and have ${user_age} years old.`
);
