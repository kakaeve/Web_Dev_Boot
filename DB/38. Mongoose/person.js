const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/personApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((e) => {
    console.log("err : ", e);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fulName").get(function () {
  return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  console.log("About to save");
});

personSchema.post("save", async function () {
  console.log("Saved!!!");
});

const Person = mongoose.model("Person", personSchema);
