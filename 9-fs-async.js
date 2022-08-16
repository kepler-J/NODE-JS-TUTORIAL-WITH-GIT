const { readFile, writeFile } = require("fs");
console.log("Start...");

//Read file is handled by a different thread that the defual thread
readFile("./contents/first.txt", "utf-8", (error, result) => {
  if (!error) {
    //console.log(result);
    const first = result;

    readFile("./contents/second.txt", "utf-8", (error, result) => {
      if (!error) {
        const second = result;
        writeFile(
          "./contents/forth.txt",
          `fitst data ${first} second data ${second} \n`,
          { flag: "a" },
          (error, result) => {
            if (!error) {
              console.log("Data saved " + result);
            } else {
              console.log("Failed to save data");
            }
          }
        );
      } else {
      }
    });
  } else {
    console.log(error);
  }
});

console.log("End...");
