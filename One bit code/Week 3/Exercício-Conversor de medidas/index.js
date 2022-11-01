// Variables
let footage = prompt("Enter a value in Meters to convert", "");
let measure = parseFloat(
  prompt(
    "Enter the tipe of conversion:\n1 - mm\n2 - cm\n3 - dm\n4 - dam\n5 - hm\n6 - km"
  )
);
let conversion = "";
switch (measure) {
  case 1:
    conversion = footage * 1000;
    alert(`The conversion result is ${conversion}mm`);
    break;
  case 2:
    conversion = footage * 100;
    alert(`The conversion result is ${conversion}cm`);
    break;
  case 3:
    conversion = footage * 10;
    alert(`The conversion result is ${conversion}dm`);
    break;
  case 4:
    conversion = footage / 10;
    alert(`The conversion result is ${conversion}dam`);
    break;
  case 5:
    conversion = footage / 100;
    alert(`The conversion result is ${conversion}hm`);
    break;
  case 6:
    conversion = footage / 1000;
    alert(`The conversion result is ${conversion}km`);
    break;
  default:
    alert("This one is not an option! Try again");
    break;
}
