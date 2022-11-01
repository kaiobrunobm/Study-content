let initial_capital = parseFloat(
  prompt(
    "Enter the amount of money you would like to beginning the finance control.",
    ""
  )
);

let finance_control_menu = "";

do {
  finance_control_menu = prompt(
    `You have ${initial_capital}$, would you like to;\n1 - Deposit money\n2 - Withdrow money\n3 - Exit`,
    ""
  );

  switch (finance_control_menu) {
    case "1":
      initial_capital += parseFloat(prompt("Enter the amount to deposit", ""));
      break;
    case "2":
      initial_capital -= parseFloat(prompt("Enter the amount to withdrow", ""));
      break;
    case "3":
      alert(`Your final capital is ${initial_capital}$`);
      break;
    default:
      alert("This is not a option, try again!");
  }
} while (finance_control_menu !== "3");
