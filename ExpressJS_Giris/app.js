const express = require("express"); // Express modülünü projeye dahil eder.
const app = express(); // Uygulamayı başlatır.
const bodyParser = require("body-parser"); // body-parser modülünü projeye dahil eder.
// body-parser modülü, gelen isteklerdeki verileri işlemek için kullanılır.
// body-parser modülü, gelen verileri JSON formatına çevirir.
// body-parser modülü, gelen verileri URL-encoded formatına çevirir.
const adminRoutes = require("./routes/admin"); // admin.js dosyasını projeye dahil eder.
const userRoutes = require("./routes/user"); // user.js dosyasını projeye dahil eder.

app.use(bodyParser.urlencoded({ extended: false })); // URL-encoded verilerin işlenmesi için kullanılır.

// routes klasöründeki dosyaları kullanmak için middleware tanımlamaları yapılır.
app.use("/admin", adminRoutes); // adminRoutes middleware'ini kullanır.
app.use(userRoutes); // userRoutes middleware'ini kullanır.

const port = 3000; // Sunucunun çalışacağı port numarasını belirler.

// 404 durumunda çalışacak middleware fonksiyonunu tanımlar.
app.use((req, res) => {
  res.status(404).send("<h1>Sayfa Bulunamadı</h1>"); // Tarayıcıya "Sayfa Bulunamadı" yazısını gönderir.
});

// Sunucuyu belirtilen port numarasında başlatır.
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`); // Sunucunun başlatıldığı port numarasını konsola yazdırır.
});

// Middleware Nedir?
// Middleware, uygulamanın herhangi bir isteği işlemeden önce çalıştırılmasını sağlar.
// Middleware fonksiyonları, istek ve yanıt nesneleri üzerinde işlem yapabilir.
// Middleware fonksiyonları, isteği işlemeyi durdurabilir ve yanıt nesnesini gönderebilir.
// Middleware fonksiyonları, isteği işlemek için bir sonraki middleware fonksiyonunu çağırabilir.
// Middleware fonksiyonları, isteği işlemek için bir sonraki middleware fonksiyonunu çağırmazsa, isteği işlemeyi durdurabilir.
