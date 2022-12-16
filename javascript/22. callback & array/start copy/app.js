const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function print(e) {
//   console.log(e);
// }

// number.forEach((e) => {
//   if (e % 2 === 0) {
//     console.log(e);
//   }
// });

//Map

// const doubles = number.map((num) => {
//   return num * 2;
// });

// const square = (num) => {
//   return num ** 2;
// };

// const rollDie = () => Math.floor(Math.random() * 6 + 1);

// const add = (a, b) => a + b;

// //setTimeout
// setTimeout(() => {
//   console.log("Hello!!!");
// }, 3000);

//set interval

// console.log(Math.random());
// setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = numbers.filter((num) => num % 2 === 0);

//SOME EVERY

// const exams = [80, 60, 90, 88, 79, 86, 58, 86, 90];

// exams.every((score) => score >= 75);
//every===and some===or

//reduce

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// const total = prices.reduce((acc, cur) => {
//   return acc + cur;
// });

// const min = prices.reduce((acc, cur) => {
//   return acc < cur ? acc : cur;
// });

// const evens = [2, 4, 6, 8, 10];

// evens.reduce((acc, cur) => {
//   return acc + cur;
// },100);

//arrow function & this

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
