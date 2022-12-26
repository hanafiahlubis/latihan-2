import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/a" && req.method === "GET") {
    res.end("Anda berhasil mengakses /a, method get");
  } else if (req.url === "/a" && req.method === "POST") {
    res.end("Anda berhasil mengakses /a, method post");
  } else if (req.url === "/c") {
    res.end("Anda berhasil mengakses /c");
  } else if (req.url === "/d") {
    res.end("Anda berhasil mengakses /d");
  } else {
    res.end("Not found.");
  }
});

server.listen(3000);

console.log("server berjalan di http://localhost:3000");
