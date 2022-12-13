let input = prompt("input");
console.log(input);
console.log(1 + input);
console.log(typeof (input + 0));
switch (typeof (input + 0)) {
  case "number":
    console.log("number is number :)");
    break;
  case "string":
    console.log("String is String :)");
    break;
  default:
    console.log("hohohoho!");
}
