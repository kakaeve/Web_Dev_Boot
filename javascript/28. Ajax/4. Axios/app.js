// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getStarWarsPerson(4);
// getStarWarsPerson(44);
// getStarWarsPerson("qwe");

const jokes = document.querySelector("#jokes");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    return res.data.joke;
  } catch (error) {
    console.log(error);
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const li = document.createElement("li");
  li.append(jokeText);
  jokes.append(li);
};

const button = document.querySelector("button");
button.addEventListener("click", addNewJoke);
