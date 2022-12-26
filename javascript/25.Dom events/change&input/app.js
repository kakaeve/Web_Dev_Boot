const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", (e) => {
//   e.preventDefault();
//   console.log(input.value);
// });
input.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(input.value);
  h1.innerText = input.value;
  console.log(e);
});
