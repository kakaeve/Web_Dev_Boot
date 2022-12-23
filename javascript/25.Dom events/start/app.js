const btn = document.querySelector("#v2");

btn.onclick = () => {
  console.log("You Clocked Me!!!");
};

function scream() {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAah");
  console.log("STOP!!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("you clicked the button");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", () => {
  alert("Clicked");
});

const tasBtn = document.querySelector("#tas");

function twist() {
  console.log("twist");
}

function shout() {
  console.log("shout");
}

// tasBtn.onclick = twist;
// tasBtn.onclick = shout;

tasBtn.addEventListener("click", twist);
tasBtn.addEventListener("click", shout);
