const mongosse = require('mongoose'); // mongoose kütüphanesini kullanarak veritabanına bağlanmak için gerekli işlemleri yapacağız.

let instance = null; // Singleton pattern kullanarak tek bir instance oluşturacağız ve bu instance'ı kullanarak veritabanına bağlanacağız. Bu sayede uygulamanın her yerinde aynı veritabanı bağlantısını kullanabileceğiz.

// Database sınıfı, veritabanına bağlanmak için gerekli işlemleri yapacak ve Singleton pattern kullanarak tek bir instance oluşturacak.
class Database {
    // constructor metodu, sınıfın bir örneği oluşturulduğunda çalışacak ve Singleton pattern kullanarak tek bir instance oluşturacak. Eğer instance zaten varsa, mevcut instance'ı döndürecek. Eğer instance yoksa, yeni bir instance oluşturacak ve bu instance'ı döndürecek.
    constructor() {
        if (!instance) {
            this.moongoConnection = null;
            instance = this;
        };
        return instance;
    }

    // connect metodu, veritabanına bağlanmak için gerekli işlemleri yapacak ve bağlantıyı sağlayacak. Bağlantı sağlandıktan sonra, bağlantı nesnesini moongoConnection özelliğine atayarak diğer işlemlerde kullanabileceğiz.
    async connect(options) {
        try {
            console.log('Database Connecting...');
            let db = await mongosse.connect(options.CONNECTION_STRING);
            this.moongoConnection = db;
            console.log("Database Connected Successfully!");
        } catch (error) {
            console.log("Database Connection Error: ", error);
        }

    }
}

module.exports = Database; // Database sınıfını dışa aktararak diğer dosyalarda kullanabilmemizi sağlıyoruz.
