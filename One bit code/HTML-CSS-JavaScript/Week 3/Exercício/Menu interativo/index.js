const user_name = prompt("Enter your username please.", "");
let menu_confirm = confirm("Do you want to continue to the menu?");

do {
  let menu = prompt(
    `Hi ${user_name} walcome to the menu, choice your option.\n 1- option¹\n 2- option²\n 3- option³\n 4- option⁴\n 5- exit`
  );

  switch (menu) {
    case "1":
      alert("01 It's working");
      break;
    case "2":
      alert("02 It's working");
      break;
    case "3":
      alert("03 It's working");
      break;
    case "4":
      alert("04 It's working");
      break;
    case "5":
      alert("You exit the aplication");
      menu_confirm = false;
      break;
    default:
      alert("This is not a option, try again!");
  }
} while (menu_confirm == true);
