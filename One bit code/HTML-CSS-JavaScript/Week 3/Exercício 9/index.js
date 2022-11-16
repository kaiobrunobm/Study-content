let greater_base,
  lower_base,
  radius,
  side,
  base,
  height,
  calc_menu = "";
let pi = 3.14;

// Area calc functions

// Triangle area calculation
function triangle_area(base, height) {
  base = parseFloat(prompt("Enter the value of the triangle base:"));
  height = parseFloat(prompt("Enter the value of the triangle height"));

  return (base * height) / 2;
}

// Retangle area calculation
function retangle_area(base, height) {
  height = parseFloat(prompt("Enter the value of the retangle height"));
  base = parseFloat(prompt("Enter the value of the retangle base:"));

  return base * height;
}

// Square area calculation
function square_area(side) {
  side = prompt("Enter the value of the square side");
  return side * side;
}

// Trapeze area calculation
function trapeze_area(greater_base, lower_base, height) {
  greater_base = parseFloat(
    prompt("Enter the value of the trapeze greater base")
  );
  lower_base = parseFloat(prompt("Enter the value of the trapeze lower base"));
  height = parseFloat(prompt("Enter the value of the trapeze height"));

  return ((greater_base + lower_base) * height) / 2;
}

// Circle area calculation
function circle_area(radius) {
  radius = prompt("Enter the name of the circle radius");

  return pi * (radius * radius);
}

// Menu Function
function menu_execute() {
  calc_menu = prompt(
    `Walcome to the geometric calculator!\nThe availables operations are:\n1 - Triangle area\n2 - Retangle area\n3 - Square area\n4 - Trapeze area\n5 - Circle area\n6 - Exit the geometric calculator`
  );

  return calc_menu;
}

while (calc_menu !== "6") {
  menu_execute();

  switch (calc_menu) {
    case "1":
      alert(`The area of this triangle it's ${triangle_area()}`);

      break;
    case "2":
      alert(`The area of this retangle it's ${retangle_area()}`);

      break;
    case "3":
      alert(`The area of this square it's ${square_area()}`);

      break;
    case "4":
      alert(`The area of the trapeze it's ${trapeze_area()}`);

      break;
    case "5":
      alert(`The area of the circle it's ${circle_area()}`);

      break;
    case "6":
      alert("Exiting...");

      break;
    default:
      alert("This option is not available, try again");
  }
}
