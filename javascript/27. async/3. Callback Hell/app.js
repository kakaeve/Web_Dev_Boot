// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext();
//   }, delay);
// };

// delayedColorChange("red", 1000, () => {
//   console.log("inside Callback");
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000, () => {
//         delayedColorChange("blue", 1000, () => {});
//       });
//     });
//   });
// });

searchMoviesAPI(
  "amadeus",
  () => {
    saveToDB(
      movies,
      () => {
        //성공시
      },
      () => {
        //실패시
      }
    );
  },
  () => {
    //API가 멈추거나 요청 실패시
  }
);
