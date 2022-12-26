const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Data here");
      }
      reject("error");
    }, 1000);
  });
};

async function makeTwoRequest() {
  try {
    let data1 = await fakeRequest("/page1");
  } catch (e) {
    console.log("We got Error!!! : ", e);
  }
  console.log("hello");
}
