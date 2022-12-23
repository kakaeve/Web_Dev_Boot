const button = document.querySelector("#color");
const h1 = document.querySelector("h1");
const makeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const newColor = `rgb(${r},${g},${b})`;
  const textColor = `rgb(${256 - r},${256 - g},${256 - b})`;
  document.body.style.background = newColor;
  h1.innerText = newColor;
  h1.style.color = textColor;
};

button.addEventListener("click", makeColor);
