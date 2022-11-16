let real_state_menu = "";
let immobiles = [];

while (real_state_menu !== "3") {
  real_state_menu = prompt(
    `Welcome, i'll be your real state broker today\nWe have ${immobiles.length} immobiles available\nchoose an option on the menu:\n1 - Add a immobile\n2 - See all the existing immobiles\n3 - Exit the real state menu`
  );
  switch (real_state_menu) {
    case "1":
      alert(
        "You'll add a immobile in the real state, answer the requested information!"
      );
      let owner_name = prompt("Enter the name of the immobile owner");
      let rooms_quantities = parseFloat(
        prompt("Enter the amount of rooms in the property")
      );
      let bathrooms_quantities = parseFloat(
        prompt("Enter the bathrooms of rooms in the property")
      );
      let garage_question = confirm(
        "The property has a garage (Yes [Ok] or [Cancel] No)? "
      );

      if (garage_question === true) {
        have_garage = "have a garage";
      } else if (garage_question === false) {
        have_garage = "have not a garage";
      } else {
        have_garage = "the owner don't reponse if have a garage";
      }

      immobiles.push({
        owner_name,
        rooms_quantities,
        bathrooms_quantities,
        have_garage,
      });
      break;

    case "2":
      for (let index = 0; index < immobiles.length; index++) {
        let immobile_apresentetion = immobiles[index];
        alert(
          `${index + 1}° Property\nThe name of the owner of the property is ${
            immobile_apresentetion.owner_name
          }\nThe property has ${
            immobile_apresentetion.rooms_quantities
          } rooms\n${
            immobile_apresentetion.bathrooms_quantities
          } Bathrooms and ${immobile_apresentetion.have_garage}`
        );
      }
      break;

    case "3":
      alert("Exiting real state broker menu...");
      break;
    default:
      alert("This option is't available");
  }
}
