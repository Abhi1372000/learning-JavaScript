const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("API fetch 1...");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  var x = 5;

  setTimeout(() => {
    if (x !== 5) {
      reject("The API is not fetched");
    } else {
      resolve("API fetch 2...");
    }
  }, 5000);
});

Promise.all([p1, p2])
  .then((result) => {
    console.log(result); // here the result is showing of both the promies
  })
  .catch((err) => {
    console.log(err); // here the error will cathched if any one promies will rejected then all the promes will stop
  });
