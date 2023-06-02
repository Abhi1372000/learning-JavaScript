async function Weather() {
  let bhilaiWthr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The weather of Bhilai is 45deg");
    }, 3000);
  });

  let raipuriWthr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The weather of raipur is 22deg");
    });
  }, 6000);
  console.log("fetching bhilai");
  let wthbhilai = await bhilaiWthr;
  console.log("fetching raipur");
  let wthraipur = await raipuriWthr;
  return [wthbhilai, wthraipur];
}

console.log("This is weather reports");

let a = Weather();
console.log(a);
