function sing() {
  console.log("La");
  console.log("Ra");
  console.log("LLa");
}
function test(first, second, third) {
  console.log(`${first}다. 2번 3번은 입력 안한다!`);
}

function greet(firstName, lastName) {
  console.log(`안녕하세요. ${firstName} ${lastName[0]}님`);
}

function repeat(text, num) {
  for (let i = 0; i < num; i++) {
    console.log(`${text} ${i + 1}`);
  }
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
  console.log(x + y);
}
