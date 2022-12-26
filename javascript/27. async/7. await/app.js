const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => {
//     return delayedColorChange("orange", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("yellow", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("green", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("blue", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("indigo", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("violet", 1000);
//   });

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "All Done";
}

// rainbow().then(() => console.log("End of rainbow"));

async function printRainbow() {
  await rainbow();
  console.log("End of rainbow");
}
