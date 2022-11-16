let first_number, second_number;

alert("You'll Enter two numbers and the aplication will do the Math.");
// Prompt user Numbers
first_number = parseFloat(prompt("Enter a number", ""));
second_number = parseFloat(prompt("Enter another number", ""));

// Math
let sum = first_number + second_number;
let subtraction = first_number - second_number;
let multiply = first_number * second_number;
let divide = first_number / second_number;

// Results
alert(
  `
  Adding the numbers ${first_number} and ${second_number} the result is ${sum}
  Subtracting the numbers ${first_number} and ${second_number} the result is ${subtraction}
  Multiplying the numbers ${first_number} and ${second_number} the result is ${multiply}
  Dividing the numbers ${first_number} and ${second_number} the result is ${divide}
  `
);
