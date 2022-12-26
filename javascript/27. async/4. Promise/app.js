// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// };

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestCallback(
//   "books.com/page1",
//   (res) => {
//     console.log("Wolk!!");
//     console.log(res);
//     fakeRequestCallback(
//       "books.com/page2",
//       (res) => {
//         console.log("wolk again");
//         console.log(res);
//         fakeRequestCallback(
//           "books.com/page3",
//           (res) => {
//             console.log("wolk again (3rd)");
//             console.log(res);
//           },
//           (err) => {
//             console.log("Error 3rd");
//           }
//         );
//       },
//       (err) => {
//         console.log("Error 2nd");
//       }
//     );
//   },
//   (err) => {
//     console.log("Error");
//     console.log(err);
//   }
// );
// fakeRequestPromise("yelp.com/api/coffee")
//   .then(() => {
//     console.log("Wolked!!");
//     fakeRequestPromise("yelp.com/api/coffee_2nd")
//       .then(() => {
//         console.log("Wolked!!! 2nd");
//         fakeRequestPromise("yelp.com/api/coffee_3rd")
//           .then(() => {
//             console.log("wolked 3rd");
//           })
//           .catch(() => {
//             console.log("Error! 3rd");
//           });
//       })
//       .catch(() => {
//         console.log("Error! 2nd");
//       });
//   })
//   .catch(() => {
//     console.log("Error");
//   });

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("Wolk!! page1");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("Worked!!! page2");
    console.log(data);

    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log(data);

    console.log("Worked!!! page3");
  })
  .catch(() => {
    console.log("Error ");
  });
