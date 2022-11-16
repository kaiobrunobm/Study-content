// Parâmetro da função

function dobro(x) {
  alert(`O dobro de ${x} é ${x * 2}`);
}

// dobro(5);
// dobro(8);
// dobro();

function say_hello(name = "Someone") {
  alert(`Hello ${name}`);
}
// say_hello("Kaio");
// say_hello();

function sum(first_number, second_number) {
  alert(
    `a soma entre ${first_number} + ${second_number} é igual a ${
      first_number + second_number
    }`
  );
}

// sum(1, 1);

// function new_user(name, email, password, user_type) {
//   const user = {
//     name,
//     email,
//     password,
//     user_type,
//   };
//   console.log(user);
// }

// new_user("Kaio", "bmkaiobruno@gmail.com", 123456, "admin");

function parameters(user) {
  user.name;
  user.email;
  user.password;
  user.user_type;
  console.log(user);
}
const user_data = {
  name: "Kaio",
  email: "bmkaiobruno@gmail.com",
  password: 123456,
  user_type: "admin",
};

parameters(user_data);
