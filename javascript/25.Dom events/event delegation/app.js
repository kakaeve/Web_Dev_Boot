// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

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

tweetContainer.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
