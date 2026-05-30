var express = require("express");
var router = express.Router();

const fs = require("fs"); // Dizin içindeki dosyaları okumak için Dosya Sistemi modülü

let routes = fs.readdirSync(__dirname); // Dizin içindeki dosyaları oku ve bir dizi olarak döndür

// Her bir dosya için, eğer dosya .js uzantılıysa ve index.js değilse, o dosyayı router olarak kullan
// Örneğin, users.js dosyası varsa, router.use("/users", require('./users')) şeklinde ekle
// Bu sayede, yeni bir route eklemek istediğimizde sadece o route'un .js dosyasını oluşturup bu dizine koymamız yeterli olacak
// Örneğin, products.js dosyası eklersek, otomatik olarak /products route'u da eklenmiş olacak
// Bu yöntem, kodun daha modüler ve bakımı kolay olmasını sağlar, çünkü her route kendi dosyasında tanımlanır ve index.js dosyası sadece bu route'ları bir araya getirir
// Ayrıca, bu yöntem sayesinde index.js dosyası çok uzun ve karmaşık olmaz, çünkü sadece route'ları bir araya getirmekle görevli olur
// Özetle, bu kod bloğu, routes dizinindeki tüm .js dosyalarını otomatik olarak router olarak ekler ve böylece yeni route'lar eklemek için sadece yeni bir .js dosyası oluşturmak yeterli olur
for (let route of routes) {
  if (route.includes(".js") && route != "index.js") {
    router.use("/" + route.replace(".js", ""), require("./" + route));
  }
}

module.exports = router; 
