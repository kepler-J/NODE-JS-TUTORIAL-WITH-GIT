const os = require("os");
console.log(os.userInfo());

const print = console.log;

print(os.userInfo());

print(`The system up time is ${os.uptime()} seconds!`);

const ocInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(ocInfo);
