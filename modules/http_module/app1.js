const http = require("http");

// const server = http.createServer((req, res) => {
//   // res.setHeader("Content-Type", "text/html"); // İçerik türü belirler. text/html
//   // res.setHeader("Content-Type", "application/json"); // İçerik türü belirler. application/json
//   res.setHeader("Content-Type", "text/html"); // İçerik türü belirler. text/html
//   res.statusCode = 200; // Durum kodunu belirler. 200
//   res.statusMessage = "OK"; // Durum mesajını belirler. OK
//   //res.write("<h1>Merhaba Akif...</h1>"); // Merhaba Akif... yazısını h1 etiketi ile ekrana yazdırır.
//   //res.write(JSON.stringify({ name: "Bilgisayar", price: 1000 })); // JSON formatında veri gönderir.
//   res.write("<html>");
//   res.write("<head>");
//   res.write("<title>Node Js</title>");
//   res.write("</head>");
//   res.write("<body>");
//   res.write("<h1>Merhaba Akif...</h1>");
//   res.write("</body>");
//   res.write("</html>");

//   res.end(); // İşlemi sonlandırır.
// });

// server.listen(3000);
// console.log("Listening on port 3000...");

// const server = http.createServer((req, res) => {
//   console.log("Yeni bir istek geldi...");
//   res.write("Merhaba Akif...");
//   res.end();
// } );

// server.listen(3000);
// console.log("Listening on port 3000...");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>INDEX SAYFASI</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ABOUT SAYFASI</h1>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>CONTACT SAYFASI</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
