// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("Resolved : ", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     console.log("second");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Error: ", e);
//   });

const loadStarWarsPeople = async (n) => {
  try {
    const res = await fetch(`https://swapi.dev/api/people/${n}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
loadStarWarsPeople(33);
