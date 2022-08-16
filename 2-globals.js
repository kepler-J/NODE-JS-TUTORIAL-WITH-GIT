//global variables __dirname
//global variables __filename
console.log(__dirname);
console.log(__filename);

let i = 0;
const a = setInterval(() => {
  console.log("hey");
  i++;
  if (i == 3) {
    clearInterval(a);
  }
}, 1000);
