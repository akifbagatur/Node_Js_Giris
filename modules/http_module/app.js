// Http Module: Node.js'in HTTP modülü, HTTP sunucuları ve istemcileri oluşturmak için kullanıldığı bir moduldur.
// Bu nesne bir HTTP sunucusunu temsil eder.
// Bu sunucu, HTTP isteklerini dinler ve HTTP yanıtları gönderir.
// Bir HTTP sunucusu oluşturmak için http.createServer() methodunu kullanabiliriz.
// http.createServer() methodu, bir http.Server nesnesi döndürür.
// request eventi, bir istemci bir HTTP isteği gönderdiğinde tetiklenir.
// response eventi, bir HTTP isteği yanıtlandığında tetiklenir.
// connection eventi, bir istemci bağlandığında tetiklenir.
// Event loop, Node.js'in çalışma mantığını oluşturan bir yapıdır.
// Node.js, asenkron bir yapıya sahip olduğu için işlemleri sırayla yapmaz.
// İşlemleri sırayla yapmak yerine, işlemleri sıraya koyar ve sırayla yapar.
// Bu işlemi yaparken de event loop yapısını kullanır.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Merhaba Akif..."); // Merhaba Akif... yazısını ekrana yazdırır.
    res.end(); // İşlemi sonlandırır.
  }

  if (req.url === "/api/products") {
    res.write("Products list..."); // Ürünler listelendi... yazısını ekrana yazdırır.
    res.end();
  }
  
});

server.listen(3000);
console.log("Listening on port 3000..."); // 3000 portunda dinleniyor.
