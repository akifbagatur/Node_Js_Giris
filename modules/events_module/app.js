//Event Module
// event modülü, event-driven programlama için kullanırız.
// Bir olay gerçekleştiğinde, bir fonksiyonu tetiklemek için kullanırız.
// Bir olayı tetiklemek için ise emit() fonksiyonu kullanırız.
// Bir olayı dinlemek için ise on() fonksiyonu kullanırız.
// Bir olayı dinlemek için bir kere on() fonksiyonunu kullanmamız yeterlidir.

// Örnek: Bir bağlantı olayı gerçekleştiğinde, bağlantı sağlandı mesajını yazdıralım.
const Logger = require("./logger");
const logger = new Logger();

//listener kayıt
logger.on("connection", (arg) => {
  console.log("Bağlantı sağlandı", arg); //Bağlantı sağlandı { id: 1, message: 'Merhaba Akif' }
  console.log("Bağlantı sağlandı", arg.id); //Bağlantı sağlandı 1
  console.log("Bağlantı sağlandı", arg.message); //Bağlantı sağlandı Merhaba Akif
});

logger.log("Akif giriş yaptı."); //Akif giriş yaptı.
