const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((e) => {
    console.log("err : ", e);
  });
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categiries: [String],
});
productSchema.methods.greet = function () {
  console.log("hello hi");
  console.log(`-from ${this.name}`);
};

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "pixy" });
  foundProduct.greet();
};

productSchema.statics.fireSale = function () {
  this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "pixy", price: 999, color: "red" });
// bike
//   .save()
//   .then((data) => {
//     console.log("Working");
//     console.log(data);
//   })
//   .then((err) => {
//     console.log("err: ", err);
//   });

// Product.findOneAndUpdate(
//   { name: "pixy" },
//   { price: -9.99 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(bike.greet());
findProduct();
