document.querySelector("button").addEventListener("click", (e) => {
  console.log("click");
  console.log(e);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.key);
  console.log(e.code);
});

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP");
      break;
    case "ArrowDown":
      console.log("DOWN");
      break;
    case "ArrowRight":
      console.log("Right");
      break;
    case "ArrowLeft":
      console.log("left");
      break;
    default:
      console.log("nope!");
  }
});

// input.addEventListener("keyup", () => {
//   console.log("keyup");
// });
