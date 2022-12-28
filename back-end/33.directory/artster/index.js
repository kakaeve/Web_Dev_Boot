const filglet = require("figlet");
const colors = require("colors");
filglet("hello world", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.rainbow);
});
