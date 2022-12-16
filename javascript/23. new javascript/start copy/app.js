// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(msg, person = "Daniel") {
//   console.log(`${msg}, ${person}`);
// }

//spread

// const nums = [123, 124, 516, 62, 3, 4, 6, 7, 234];

// Math.max(...nums);

///spread2

// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];

// const allpets = [...cats, ...dogs];

//object spread

// const feline = { legs: 4, family: "Felidae" };
// const canine = { isFurry: true, family: "Caninae" };

// const catDog = {};

// const dataFromForm = {
//   email: "aaa@aaa.com",
//   password: "1234",
//   username: "frank",
// };

// const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

//Rest

// function sum() {
//   //   console.log(arguments);
//   return arguments.values().reduce((acc, cur) => acc + cur);
// }

// function sum(...nums) {
//   return nums.reduce((acc, cur) => acc + cur);
// }

// console.log(sum(3, 4, 5, 6, 7, 8, 9));

// function raceResults(gold, silver, ...everyoneElse) {
//   console.log(`금메달 : ${gold}`);
//   console.log(`은메달 : ${silver}`);
//   console.log(`나머지 분들: ${everyoneElse}`);
// }

//destructoring

// const scores = [24, 23, 5, 21, 64, 57, 86, 99];

// const [gold, silver, bronze, ...everyoneElse] = scores;

// const user = {
//   id: "qwe",
//   email: "asd@asd.com",
//   firstName: "Nick",
//   lastName: "Paul",
//   born: 1930,
// };

// const { email } = user;

// const { born: birthday } = user;

const user = {
  id: "qwe",
  email: "asd@asd.com",
  firstName: "Nick",
  lastName: "Paul",
  born: 1930,
};

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
