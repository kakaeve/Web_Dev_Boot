const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const flash = require("connect-flash");

const Product = require("./models/product");
const Farm = require("./models/farm");

const session = require("express-session");

const sessionOptions = {
  secret: "thisisnotgoodsecret",
  resave: false,
  saveUninitialized: false,
};

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true })
  .then(() => {
    console.log("connection open!!!");
  })
  .catch((err) => {
    console.log("err : ", err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});

//Farm route

app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});

app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

app.get("/farms/:id", async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate("products");

  console.log(farm);
  res.render("farms/show", { farm });
});

app.delete("/farms/:id", async (req, res) => {
  const farm = await Farm.findByIdAndDelete(req.params.id);

  res.redirect("/farms");
});

app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  req.flash("success", "농장 추가 성공!");
  res.redirect("/farms");
});

app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);

  res.render("products/new", { categories, id, farm });
});

app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category });
  farm.products.push(product);
  product.farm = farm;
  await farm.save();
  await product.save();
  res.redirect(`/farms/${id}`);
});

//product route

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });

    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});

    res.render("products/index", { products, category: "ALL" });
  }
  //console.log(products);
});
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("farm", "name");
  res.render("products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  console.log(req.body);
  res.redirect(`/products/${product._id}`);
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.redirect(`/products`);
  //   console.log(deleteProduct);
});

app.listen(3000, () => {
  console.log("App is listen on port 3000");
});

// const sessionOptions = {
//   secret: "thisisnotgoodsecret",
//   resave: false,
//   saveUninitialized: false,
// };

// app.use(session(sessionOptions));

// app.get("/viewcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count += 1;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`여기 몇번이나 들어왔게 : ${req.session.count}`);
// });

// app.get("/register", (req, res) => {
//   const { username = "unknown" } = req.query;
//   req.session.username = username;
//   res.redirect("/greet");
// });

// app.get("/greet", (req, res) => {
//   const { username } = req.session;
//   res.send(`돌아와서 반가워요 ${username}`);
// });

// app.listen(3000, () => {});
