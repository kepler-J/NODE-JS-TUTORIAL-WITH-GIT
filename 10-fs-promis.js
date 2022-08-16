const { readFileSync, writeFileSync } = require("fs");

const p = new Promise((resolve, reject) => {
  const data = readFileSync("./contents/first.txt", "utf-8");

  if (data) {
    resolve(data);
  } else {
    reject("error");
  }
});

p.then(
  (message) => {
    console.log(message);
  },
  (mesage) => {
    console.log(`Error ${mesage}`);
  }
);
