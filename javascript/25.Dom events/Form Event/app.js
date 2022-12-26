const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = tweetForm.elements.username.value;
  const tweet = tweetForm.elements.tweet.value;
  addTweet(userName, tweet);
  tweetForm.elements.username.value = "";
  tweetForm.elements.tweet.value = "";
  //console.log("submit");
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  console.log(newTweet);
  tweetContainer.append(newTweet);
};
