const btn1p = document.querySelector("#lp");
const btn2p = document.querySelector("#rp");
const resetBtn = document.querySelector("#reset");

const score1p = document.querySelector("#left");
const score2p = document.querySelector("#right");

btn1p.addEventListener("click", (e) => {
  console.log(score1p);
  let score = parseInt(score1p.innerText);
  score1p.innerText = `${score + 1}`;
});

btn2p.addEventListener("click", (e) => {
  console.log(score2p);
  let score = parseInt(score2p.innerText);
  score2p.innerText = `${score + 1}`;
});

resetBtn.addEventListener("click", () => {
  score1p.innerText = "0";
  score2p.innerText = "0";
});
