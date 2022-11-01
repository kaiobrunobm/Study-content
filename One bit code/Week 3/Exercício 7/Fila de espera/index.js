"use strict";

// Patients
let hospital_patients = [];

// menu
let menu = "";

// menu cases
while (menu !== "3") {
  var hospital_line = [];
  for (let index = 0; index < hospital_patients.length; index++) {
    hospital_line += `${index + 1}° - ${hospital_patients[index]}\n`;
  }

  // menu
  menu = prompt(
    `Walcome to the hospital! \nThe line it's here:\n${hospital_line}\nWhat do you want to do?\n1 - New patient\n2 - See patient\n3 - Exit hospital`
  );

  switch (menu) {
    case "1":
      let new_patient = prompt("Enter the name of the new patient");
      alert(
        `Welcome to the line ${new_patient}, you will be attended by a minute `
      );
      hospital_patients.push(new_patient);
      break;

    case "2":
      let pull_patient = hospital_patients.shift();
      if (pull_patient) {
        alert(`The patient name is ${pull_patient}`);
      } else {
        alert(`Has no one in the line`);
      }
      break;

    case "3":
      alert("Bye, see you next time!");
      break;

    default:
      alert("This option is invalid. Please try again");
  }
}
