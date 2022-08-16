const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./contents/first.txt", "utf-8");

const second = readFileSync("./contents/second.txt", "utf-8");
console.log(first);
console.log(second);

writeFileSync("./contents/first_try.txt", "Overtite the file");
writeFileSync("./contents/first_try_new.txt", "Overtite the file", {
  flag: "a",
});
