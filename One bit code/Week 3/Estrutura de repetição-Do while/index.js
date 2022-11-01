let speed_car = prompt("Enter the speed of the car", " ");

do {
  alert(`The speed of the car it's ${speed_car}km/h`);
  speed_car -= 20;
} while (speed_car > 0);
