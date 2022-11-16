"use strict";
// Variables
let job_interview_menu;

// Elements
const job_vacancies = [
  {
    vacancy_name: "Web Developer Junior",
    vacancy_description: "...",
    register_time_limit: "03/01/2023",
    vacancy_registers: [
      "Kaio Bruno Barbosa Magalhães",
      "Walker Hugo Barbosa Magalhães",
    ],
  },
  {
    vacancy_name: "Web Developer Senior",
    vacancy_description: "...",
    register_time_limit: "11/04/2023",
    vacancy_registers: [
      "Kaio Bruno Barbosa Magalhães",
      "Walker Hugo Barbosa Magalhães",
    ],
  },
  {
    vacancy_name: "Web Developer Pleno",
    vacancy_description: "...",
    register_time_limit: "03/12/2022",
    vacancy_registers: [
      "Kaio Bruno Barbosa Magalhães",
      "Walker Hugo Barbosa Magalhães",
    ],
  },
];

// Menu function
function show_menu() {
  job_interview_menu = prompt(
    `Welcome to Your Job interview menu!\nWhat do you want to do?\n1 - List vacancies avaiable\n2 - Create a new vacancies\n3 - See one vacancy\n4 - Register a candidate for a vacancy\n5 - Delete a vacancy\n6 - Exist the job interview menu`
  );
}

// Functions of the options on the menu

// Option 1 - List vacancies avaiable
function list_vacancys() {}

// Option 2 - Create a new vacancies
function create_vacancy() {
  let vacancy_name = prompt("Enter the name of the vacancy:", "");
  let vacancy_description = prompt("Enter the description of the vacancy:", "");
  let register_time_limit = prompt(
    "Enter the time limit of the registration on the vacancy",
    ""
  );
  let register_candidate = [];

  let confirm_creation = confirm(
    `The vacancy informations is:\nName :${vacancy_name}\nDescription :${vacancy_description}\nTime limit to register :${register_time_limit}\nWould you like to register?`
  );

  if (confirm_creation) {
    alert("The creation of the vacancy was successful");
    return job_vacancies.push({
      vacancy_name,
      vacancy_description,
      register_time_limit,
      register_candidate,
    });
  } else {
    alert("The creation of the vacancy was unsuccessful");
  }
}

// Option 3 - See one vacancy
function see_one_vacancy() {}

// Option 4 - Register a candidate for a vacancy
function register_candidate() {
  let candidate_name = prompt("Enter the name of the candidate");
  let vacancy_index = prompt(
    "Enter the index of the vacancy to register the candidate"
  );

  let confirm_registration = confirm(
    `The information about the registration is:\nCandidate name: ${candidate_name}\nYou want to register the candidate on the vancacy of ${job_vacancies[vacancy_index].vacancy_name}?`
  );

  if (confirm_registration) {
    alert("The registration was successfully registered");
    return job_vacancies[vacancy_index].vacancy_registers.push(candidate_name);
  } else {
    alert("The registration was not successfully, try again");
  }
}

// Option 5 - Delete a vacancy
function delete_vacancy() {}

// Aplication
while (job_interview_menu !== "6") {
  show_menu();

  switch (job_interview_menu) {
    case "1":
    case "2":
      create_vacancy();
      break;
    case "3":
    case "4":
      register_candidate();
      break;
    case "5":
    case "6":
      alert("You are existing the job interview menu...");
      break;
    default:
      alert("This one is not a option");
  }
}
