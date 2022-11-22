const http = require("http");
const fs = require("fs");
const isPrime = require("prime-number");
const factorial = require("factorial");

const app = http.createServer(function (req, res) {
  let url = req.url;
  const urlSplit = url.split("/");
  const num = urlSplit[urlSplit.length - 1];

  let path = "";

  switch (url) {
    case "/":
      path = "./pages.html";
      httpServer("text/html");
      break;

    case "/pages":
      path = "./pages.html";
      httpServer("text/html");
      break;
    case "/pages/sports":
      path = "./pages/sports.html";
      httpServer("text/html");
      break;
    case "/pages/about":
      path = "./pages/about.html";
      httpServer("text/html");
      break;
    case "/favicon.ico":
      console.log("uherw");
      break;
    case "/files":
      path = "./files.html";
      httpServer("text/html");
      break;
    case "/files/people":
      path = "./files/people.txt";
      httpServer("text/html");
      break;
    case "/files/shops":
      path = "./files/shops.txt";
      httpServer("text/html");
      break;
    case `/contacts/${num}`:
      path = "./contacts.json";
      httpServer("text/html", num);
      break;
    case "/contacts":
      path = "./contacts.json";
      httpServer("text/html");
      break;
    case `/comps/fectorial/${num}`:
      const number = factorial(num);
      const dataN = number.toString();
      res.end(dataN);
      break;
    case `/comps/primes/${num}`:
      const numbe = isPrime(num);
      res.end(numbe.toString());
      break;
    default:
      path = "err";
      console.log("hey");
      break;
  }

  function httpServer(typeOfRes, num) {
    fs.readFile(path, { encoding: "utf8" }, (err, data) => {
      if (num) {
        jsData = JSON.parse(data)[num - 1];
        data = JSON.stringify(jsData);
      }

      res.writeHead(200, { "Content-Type": typeOfRes });
      res.write(data);
      res.end();
    });
  }
});
app.listen(3005, () => {
  console.log("listen");
});
