const http = require("http");
const server = http.createServer((request, result) => {
  if (request?.url === "/") {
    result.end("Welcome to the home page");
  } else if (request?.url === "/about") {
    result.end("Welcome to the about page");
  } else {
    result.end(`
  <h1>Ops!</h1>

  <p>It seems we can't find the page you are looking for!</p>
  <a href="/">Home</a>
  `);
  }
});

server.listen(5000);
