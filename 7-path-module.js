const path = require("path");

console.log(path);

console.log(path.sep);

const filePath = path.join("contetns", "files", "datas", "hi.text");

console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(
  __dirname,
  "contetns",
  "files",
  "datas",
  "hi.text"
);

console.log(absolute);
