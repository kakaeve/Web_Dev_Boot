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
