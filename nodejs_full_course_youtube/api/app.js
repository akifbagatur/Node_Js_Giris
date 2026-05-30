if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} else {
  console.log("Production modunda çalışıyor, .env dosyasına ihtiyaç yok.");
} // .env dosyasındaki değişkenler, process.env üzerinden erişilebilir hale gelir. Bu sayede uygulamanın farklı ortamlarda (geliştirme, test, üretim) farklı yapılandırmalarla çalışması sağlanır.


var createError = require('http-errors'); // http-errors modülü, HTTP hatalarını oluşturmak ve yönetmek için kullanılır. Bu modül, hata durumlarını daha kolay ve tutarlı bir şekilde ele almanıza yardımcı olur. Örneğin, 404 Not Found veya 500 Internal Server Error gibi durumları oluşturmak için kullanılabilir.
var express = require('express'); // Express, Node.js için popüler bir web uygulama çatısıdır. Web sunucuları oluşturmak, yönlendirme yapmak, middleware kullanmak ve HTTP isteklerini yönetmek gibi birçok işlevi kolaylaştırır.
var path = require('path'); // path modülü, dosya ve dizin yollarını yönetmek için kullanılır. Dosya yollarını birleştirmek, ayrıştırmak ve normalleştirmek gibi işlemleri yapmanıza olanak tanır. Bu, platformlar arası uyumluluğu artırır ve dosya yollarıyla ilgili hataları azaltır.
var cookieParser = require('cookie-parser'); // cookie-parser, Express uygulamalarında HTTP isteklerindeki çerezleri (cookies) kolayca yönetmek için kullanılan bir middleware'dir. Bu modül, gelen isteklerdeki çerezleri ayrıştırır ve bu çerezlere kolayca erişmenizi sağlar. Ayrıca, çerezleri oluşturmak ve göndermek için de kullanılabilir.
var logger = require('morgan'); // morgan, HTTP isteklerini loglamak için kullanılan bir middleware'dir. Bu modül, gelen isteklerin detaylarını (örneğin, istek yöntemi, URL, durum kodu, yanıt süresi) konsola veya belirli bir dosyaya kaydetmenizi sağlar. Bu sayede uygulamanızın performansını ve kullanımını izlemek daha kolay hale gelir.

var indexRouter = require('./routes/index'); // routes/index.js dosyasını indexRouter değişkenine atar. Bu dosya, uygulamanın ana rotalarını tanımlar ve bu rotalara gelen istekleri nasıl işleyeceğini belirler. Örneğin, ana sayfa ("/") gibi rotalar burada tanımlanabilir ve bu rotalara gelen istekler için uygun yanıtlar oluşturulabilir.
var usersRouter = require('./routes/users'); // routes/users.js dosyasını usersRouter değişkenine atar. Bu dosya, kullanıcılarla ilgili rotaları tanımlar ve bu rotalara gelen istekleri nasıl işleyeceğini belirler. Örneğin, kullanıcı kayıt, giriş veya profil gibi işlemlerle ilgili rotalar burada tanımlanabilir ve bu rotalara gelen istekler için uygun yanıtlar oluşturulabilir.

var app = express(); // Express uygulamasını başlatır. Bu, web sunucusunu oluşturur ve yapılandırmaya başlamanızı sağlar. app değişkeni, uygulamanızın tüm özelliklerine ve işlevlerine erişmenizi sağlar. Örneğin, rotalar eklemek, middleware kullanmak ve sunucuyu dinlemeye başlamak gibi işlemleri bu değişken üzerinden yapabilirsiniz.

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Uygulamanın görünüm (view) dosyalarının bulunduğu dizini belirtir. Bu örnekte, __dirname (geçerli dosyanın bulunduğu dizin) ile 'views' dizini birleştirilerek görünüm dosyalarının tam yolu oluşturulur. Bu sayede, uygulama görünüm dosyalarını bu dizinde arayacaktır.
app.set('view engine', 'ejs'); // Uygulamanın görünüm motorunu (view engine) belirtir. Bu örnekte, EJS (Embedded JavaScript) kullanılır. EJS, HTML içinde JavaScript kodu yazmanıza olanak tanır ve dinamik içerik oluşturmanızı sağlar. Bu sayede, verileri görünüm dosyalarına kolayca geçirebilir ve kullanıcıya dinamik sayfalar sunabilirsiniz.

app.use(logger('dev')); // morgan middleware'ini kullanarak HTTP isteklerini loglar. 'dev' formatı, isteklerin detaylarını konsola renkli bir şekilde gösterir. Bu, geliştirme sırasında isteklerin durumunu ve performansını izlemek için faydalıdır.
app.use(express.json()); // Gelen HTTP isteklerinin gövdesini (body) JSON formatında ayrıştırır. Bu sayede, gelen verileri JavaScript nesneleri olarak kullanabilirsiniz. Örneğin, bir POST isteğiyle gönderilen JSON verilerini req.body üzerinden kolayca erişebilirsiniz.
app.use(express.urlencoded({ extended: false })); // Gelen HTTP isteklerinin gövdesini URL-encoded formatında ayrıştırır. Bu, HTML formlarından gönderilen verileri ayrıştırmak için kullanılır. extended: false seçeneği, sadece basit anahtar-değer çiftlerini ayrıştırır ve iç içe yapıları desteklemez. Eğer daha karmaşık veri yapılarıyla çalışıyorsanız, extended: true seçeneğini kullanabilirsiniz.
app.use(cookieParser()); // cookie-parser middleware'ini kullanarak HTTP isteklerindeki çerezleri ayrıştırır. Bu sayede, gelen isteklerdeki çerezlere req.cookies üzerinden kolayca erişebilirsiniz. Ayrıca, çerezleri oluşturmak ve göndermek için de kullanılabilir.
app.use(express.static(path.join(__dirname, 'public'))); // Uygulamanın statik dosyalarını (örneğin, CSS, JavaScript, resimler) sunmak için kullanılır. Bu örnekte, __dirname ile 'public' dizini birleştirilerek statik dosyaların tam yolu oluşturulur. Bu sayede, uygulama bu dizindeki dosyalara doğrudan erişim sağlar ve bu dosyaları istemcilere sunar.

app.use("/api", require("./routes/index")); // Uygulamanın ana rotalarını tanımlayan index.js dosyasını kullanır. Bu sayede, uygulama bu dosyada tanımlanan rotalara gelen istekleri işleyebilir ve uygun yanıtlar oluşturabilir. Örneğin, ana sayfa ("/") gibi rotalar burada tanımlanabilir ve bu rotalara gelen istekler için uygun yanıtlar oluşturulabilir.

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
}); // Bu middleware, uygulamaya gelen isteklerin hiçbir rotayla eşleşmediği durumlarda çalışır. createError(404) ile bir 404 Not Found hatası oluşturulur ve next() fonksiyonuyla bir sonraki middleware'e iletilir. Bu sayede, uygulama 404 hatalarını düzgün bir şekilde ele alabilir ve kullanıcıya uygun bir hata sayfası gösterebilir.

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500); // Hata durumunu HTTP yanıtına ekler. err.status, oluşturulan hatanın durum kodunu içerir (örneğin, 404 veya 500). Eğer err.status tanımlı değilse, varsayılan olarak 500 Internal Server Error durum kodu kullanılır. Bu sayede, uygulama hataları düzgün bir şekilde ele alabilir ve kullanıcıya uygun bir hata sayfası gösterebilir.
  res.render('error'); // Hata sayfasını render eder. 'error' görünüm dosyasını kullanarak hata sayfasını oluşturur ve kullanıcıya gösterir. Bu sayede, uygulama hataları düzgün bir şekilde ele alabilir ve kullanıcıya uygun bir hata sayfası gösterebilir.
});

module.exports = app; // app değişkenini modül olarak dışa aktarır. Bu sayede, diğer dosyalarda (örneğin, bin/www) bu uygulamayı kullanarak sunucuyu başlatabilirsiniz. Bu, uygulamanın farklı bölümlerinin birbirinden bağımsız olarak geliştirilmesine ve yönetilmesine olanak tanır.
