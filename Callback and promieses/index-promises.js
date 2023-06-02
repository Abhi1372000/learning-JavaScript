const count = true;

let myPromis = new Promise((resolve, reject) => {
  if (count) {
    resolve("The coun has some value");
  } else reject("Thse count as no value");
});

//This how we consume the promies
myPromis
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// or we can write like
// myPromis.then(
//     (value) => {console.log(value)},
//     (error) => {console.log(error);},

// )
