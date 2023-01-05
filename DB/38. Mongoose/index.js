const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((e) => {
    console.log("err : ", e);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});
// Movie.insertMany([
//   { title: "funny movie", year: 1980, score: 9.9, rating: "R" },
//   { title: "alt f4", year: 1999, score: 6.5, rating: "R" },
//   { title: "alone", year: 2001, score: 4.0, rating: "PG" },
//   { title: "happy", year: 2014, score: 4.2, rating: "R" },
//   { title: "whisper", year: 2007, score: 8.0, rating: "PG-13" },
// ]).then((data) => {
//   console.log("It works");
//   console.log(data);
// });
