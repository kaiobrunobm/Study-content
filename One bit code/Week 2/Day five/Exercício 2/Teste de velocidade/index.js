// Variables

let first_car_name = prompt("Enter the name of the car");
let first_car_speed = prompt("Enter the speed of this car");
let first_car_data = [first_car_name, first_car_speed];

let second_car_name = prompt("Enter the name of the other car");
let second_car_speed = prompt("Enter the speed of this car");
let second_car_data = [second_car_name, second_car_speed];

if (first_car_data[1] > second_car_data[1]) {
  alert(
    `The ${first_car_data[0]} it's the faster car than the ${second_car_data[0]}`
  );
} else if (second_car_data[1] > first_car_data[1]) {
  alert(
    `The ${second_car_data[0]} it's  the faster car than the ${first_car_data[0]}`
  );
} else {
  alert(
    `The speed between ${second_car_data[0]} and ${first_car_data[0]} is equal.`
  );
}
