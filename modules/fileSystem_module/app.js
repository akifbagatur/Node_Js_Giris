// Node.js File System Modülü

const fs = require("fs");   // fs modülünü import ettik

// Dosya Okuma
fs.readFile("demo.txt", "utf8", (err, data) => { // demo.txt dosyasını okuyoruz
  if (err) throw err; // hata varsa hatayı fırlat
  console.log(data); // dosyayı konsola yazdır
});

// Dosya Yazma
fs.writeFile("demo.txt", "Hello World!", "utf8", err => { // demo.txt dosyasına Hello World! yazdık
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Dosya yazma işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});

// Dosya Güncelleme
fs.appendFile("demo.txt", "\nHello World Again!", "utf8", err => { // demo.txt dosyasına Hello World Again! yazdık
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Dosya güncelleme işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});

// Dosya Silme
fs.unlink("demo.txt", err => { // demo.txt dosyasını sildik
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Dosya silme işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});

// Klasör Oluşturma
fs.mkdir("demo", err => { // demo adında bir klasör oluşturduk
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Klasör oluşturma işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});

// Klasör Silme
fs.rmdir("demo", err => { // demo adındaki klasörü sildik
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Klasör silme işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});

// Klasör İçeriği Listeleme
fs.readdir("demo", (err, files) => { // demo klasöründeki dosyaları listeliyoruz
  if (err) throw err; // hata varsa hatayı fırlat
  console.log(files); // dosyaları konsola yazdır
});

// Dosya Taşıma-değiştirme 
fs.rename("demo.txt", "demo/demo.txt", err => { // demo.txt dosyasını demo klasörüne taşıdık,değiştirdik
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Dosya taşıma işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});

// Dosya Kopyalama
fs.copyFile("demo/demo.txt", "demo/demo2.txt", err => { // demo.txt dosyasını demo2.txt olarak kopyaladık
  if (err) throw err; // hata varsa hatayı fırlat
  console.log("Dosya kopyalama işlemi başarılı!"); // işlem başarılıysa konsola yazdır
});















