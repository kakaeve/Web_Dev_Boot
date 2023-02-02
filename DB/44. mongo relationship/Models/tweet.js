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
const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});

const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);
// const makeTweets = async () => {
//   //const user = new User({ username: "바람바람", age: 22 });
//   const user = await User.findOne({ username: "바람바람" });
//   const tweet2 = new Tweet({ text: "반갑습니다.", likes: 0 });
//   //const tweet1 = new Tweet({ text: "안녕하세요.", likes: 0 });
//   tweet2.user = user;
//   //user.save();
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find({}).populate("user");
  console.log(t);
};

findTweet();
