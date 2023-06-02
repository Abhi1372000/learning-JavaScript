//lets have look on simple callback

// console.log("Before");
// getUser(1, function (user) {
//   console.log("User:", user);
//   // Get repos
//   getRepos(user.gitUserName, (repos) => {
//     console.log("Repos:", repos);
//     //get The commit
//     getCommits(repos[1], function (infoRepoComit) {
//       console.log(`the comit is done by ${repos[1]} is  - ${infoRepoComit}`);
//     });
//   });
// });
// console.log("After");

// now above we can see that getUser and getRepos and getcommits these functions are nesting each other
// now it creating callbackhell or we can say it is chrismats problem because those indentation creating a pattern of indentation
//the above call back is managed by then

/*function getUser(id, callbackFun) {
  setTimeout(() => {
    console.log("Reading from thr data base...");
    callbackFun({ id: id, gitUserName: "mosh" });
  }, 3000);
}*/ //----this fuction is now done with promies
// geting multiple data

/*function getRepos(id, callbackFun2) {
  setTimeout(() => {
    console.log("Calling Git hub API");
    callbackFun2(["repo1", "repo2", "repo3"]);
  }, 5000);
}*/ //-------this function is resolved by pomies

/*function getCommits(repoVar, callbackFun3) {
  const detRepo = {
    repo1: 2,
    repo2: 3,
    repo3: 6,
  };
  for (let x in detRepo) {
    if (x == repoVar) {
      var calledRepoCmt = detRepo[x];
      break;
    }
    setTimeout(() => {
      console.log("getting repo info...");
      callbackFun3(calledRepoCmt);
    }, 7000);
  }
}*/ //-----this function now resolve with promies

//////   Problem for solving  for callback hell
//

function getUser(id) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("Reading from thr data base...");
      reslove({ id: id, gitUserName: "mosh" });
    }, 3000);
  });
}

function getRepos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Git hub API");
      resolve(["repo1", "repo2", "repo3"]);
    }, 5000);
  });
}

function getCommits(repoVar) {
  const detRepo = {
    repo1: 2,
    repo2: 3,
    repo3: 6,
  };
  for (let x in detRepo) {
    if (x == repoVar) {
      var calledRepoCmt = detRepo[x];
      break;
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting repo info...");
      resolve(calledRepoCmt, repoVar);
    }, 7000);
  });
}
console.log("Start");
getUser(1)
  .then((user) => {
    console.log("User : ", user);
    getRepos();
  })
  .then((values) => {
    console.log("Repos", values);
    getCommits(values[1]);
  })
  .then((infoRepoCmt, repoVar) => {
    console.log(`the ${repoVar} are ${infoRepoCmt}`);
  });

console.log("END");
