const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/relationshipDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!!");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["봄", "여름", "가을", "겨울"],
  },
});
const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);
// Product.insertMany([
//   { name: "메론", price: 10000, season: "여름" },
//   { name: "감", price: 10000, season: "가을" },
//   { name: "참외", price: 10000, season: "여름" },
// ]);

// const makeFarm = async () => {
//   const farm = new Farm({ name: "동구네", city: "가평" });
//   const melon = await Product.findOne({ name: "메론" });
//   farm.products.push(melon);
//   await farm.save();
//   console.log(farm);
// };
// makeFarm();

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "동구네" });
  const koreaMelon = await Product.findOne({ name: "참외" });
  farm.products.push(koreaMelon);
  await farm.save();
  console.log(farm);
};

// addProduct();
Farm.findOne({ name: "동구네" })
  .populate("products")
  .then((farm) => console.log(farm));
