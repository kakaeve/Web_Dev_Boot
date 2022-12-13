//And
// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

//OR

// const age = prompt("Enter age");
// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("Free");
// } else if (age < 10 && age >= 5) {
//   console.log("$10");
// } else if (age < 65) {
//   console.log("$20");
// } else {
//   console.log("not age");
// }

// const name = prompt("enter your name");

// if (!name) {
//   name = prompt("try again");
// }
const age = prompt("Enter age");
if (!((age >= 0 && age < 5) || age >= 65)) {
  console.log("not baby or senior");
}
