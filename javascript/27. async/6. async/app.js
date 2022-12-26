// async function hello() {}

// const sing = async () => {
//   throw "Oh No, Problem";
//   return "LA LA LA LA";
// };

// sing()
//   .then((data) => {
//     console.log("promise resolve with: ", data);
//   })
//   .catch((err) => {
//     console.log("Promise rejected : ", err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "passwor") return username + " Welcome";
  throw "Invalid Password";
};

login("asd")
  .then((msg) => {
    console.log("Logged In!!!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

login("asdf", "passwor")
  .then((msg) => {
    console.log("Logged In!!!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });
