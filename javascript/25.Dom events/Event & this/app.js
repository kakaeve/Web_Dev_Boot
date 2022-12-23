const makeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
  //document.body.style.background = newColor;
};

const buttons = document.querySelectorAll("button");
const divs = document.querySelectorAll("div");

for (let button of buttons) {
  button.addEventListener("click", setColor);
}
for (let div of divs) {
  div.addEventListener("click", setColor);
}
function setColor() {
  console.log(this);
  this.style.backgroundColor = makeColor();
  this.style.color = makeColor();
}
