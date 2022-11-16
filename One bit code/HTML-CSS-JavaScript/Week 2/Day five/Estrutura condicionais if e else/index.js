/*let user_admin = confirm("Are you the admin of this account?");

let user_admin_result =
  user_admin === true
    ? alert("Hello admin!")
    : alert("Please get out of this account");

if (number > 3) {
  console.log("The number is greater than 3.");
} else {
  console.log("The number is less then 3.");
}
let result =
  number > 3
    ? console.log("The number is greater than 3")
    : console.log("The number is less then 3");
*/

const kaio_user_account = "kaiobrunobm";
const kaio_password_account = 5246;

let user_account = prompt("Enter your user");
let password_account = parseFloat(prompt("Enter your password"));

user_account === kaio_user_account && password_account === kaio_password_account
  ? alert("Hello Kaio Bruno Barbosa Magalhães!")
  : alert("Please try again");
