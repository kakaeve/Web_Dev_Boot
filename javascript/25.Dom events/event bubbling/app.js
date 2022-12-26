const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = makeColor();
  e.stopPropagation();
});

container.addEventListener("click", () => {
  container.classList.add("hide");
});

const makeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
