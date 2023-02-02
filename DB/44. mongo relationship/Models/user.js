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

const userSchema = new mongoose.Schema({
  first: String,
  second: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      gu: String,
      city: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);
const makeUser = async () => {
  const u = new User({
    first: "김",
    second: "성호",
    addresses: [
      {
        street: "신림로 10길",
        gu: "관악구",
        city: "서울특별시",
        country: "korea",
      },
    ],
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  console.log(user);
  user.addresses.push({
    street: "동수원로 57길",
    gu: "팔달구",
    city: "수원시",
    country: "korea",
  });
  const res = await user.save();
  console.log(res);
};

// makeUser();
addAddress("63db2783b127f6eeb8b93302");
