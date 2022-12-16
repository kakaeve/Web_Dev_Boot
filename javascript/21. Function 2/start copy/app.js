//

// let bird = "Scarlet Macaw";
// function birdWatch() {
//   let bird = "Great Blue Heron";
//   console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "HIII";
// }

// console.log(radius);
// for (let index = 0; index < 5; index++) {
//   var msg = "asd;";
// }
// var msg = "123";
// console.log(msg);

// function bankRobbery() {
//   const heroes = ["Spiderman", "wolverine", "superman"];
//   function cryForHelp() {
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`help ${hero}`);
//       }
//     }
//     inner();
//   }
//   cryForHelp();
// }

// const add = function (x, y) {
//   return x + y;
// };

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.floor(Math.random() * 10);
//   if (rand > 5) {
//     return function () {
//       console.log("5 이상이 나왔습니다.");
//     };
//   } else {
//     return function () {
//       alert("ㅠㅜㅠㅜㅠㅜㅠㅜ");
//     };
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// function isBetween(num) {
//   return num > 50 && num <= 100;
// }

// function isBetween2(num) {
//   return num > 1 && num <= 10;
// }

// const myMath = {
//   Pi: 3.141592,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num * num * num;
//   },
// };

// const cat = {
//   name: "Blue Steels",
//   color: "grey",
//   bread: "scottish fold",
//   meow() {
//     console.log("this is ", this);
//     console.log(`${this.name} says MEOWWWW`);
//   },
// };

//try-catch

// try {
//   hello.toUpperCase();
// } catch (error) {
//   console.log(error);
// }

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (error) {
    console.log(error);
  }
}
