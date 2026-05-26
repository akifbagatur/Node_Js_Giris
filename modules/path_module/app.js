// Node.js Path Modülü
// Node.js, dosya ve dizin yollarını işlemek için path modülü sağlar. 
// Bu modül, dosya ve dizin yollarını işlemek için birçok fonksiyon içerir.
// path.resolve() metodu, dosyanın tam yolunu almak için kullanılır.
// path.extname() metodu, dosya uzantısını almak için kullanılır.
// path.parse() metodu, dosya hakkında bilgi almak için kullanılır.
// path.join() metodu, dosya yollarını birleştirmek için kullanılır.
// path.dirname() metodu, dosyanın dizin yolunu almak için kullanılır.
// path.basename() metodu, dosyanın adını almak için kullanılır.
// path.delimiter, işletim sistemi özel yol ayırıcıdır.
// path.sep, işletim sistemi özel yol ayırıcıdır.
// path.format() metodu, dosya yolu nesnesini birleştirmek için kullanılır.
// path.normalize() metodu, dosya yolunu normalleştirmek için kullanılır.
// path.isAbsolute() metodu, dosya yolunun mutlak olup olmadığını kontrol etmek için kullanılır.
// path.relative() metodu, iki dosya yolu arasındaki ilişkiyi bulmak için kullanılır.
// path.resolve() metodu, dosya yollarını birleştirmek için kullanılır.
// path.toNamespacedPath() metodu, dosya yolunu Windows namespace olarak dönüştürmek için kullanılır.
// path.win32, Windows işletim sistemi için path modülüdür.


const path = require("path");

let result = path.resolve("app.js"); 
// C:\Users\user\Documents\GitHub\nodejs_giris\path_module\app.js
// hangi dosyanın olduğunu gösterir , resolve metodu ile dosyanın tam yolunu alabiliriz

result = path.extname("app.js"); 
// .js
// dosya uzantısını alır, extname metodu ile dosyanın uzantısını alabiliriz

result = path.parse(__filename); 
// dosya hakkında bilgi verir

console.log(result);
