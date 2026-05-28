const mongoose = require('mongoose');

// userSchema, kullanıcıların veritabanında nasıl saklanacağını tanımlayan bir şema. Bu şema, kullanıcıların email, password, isactive, firstname, lastname ve phonenumber gibi bilgilerini içerecek şekilde tasarlanmıştır. Ayrıca, timestamps özelliği sayesinde her kullanıcının oluşturulma ve güncellenme tarihleri otomatik olarak kaydedilecektir.
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isactive: {
        type: Boolean,
        default: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    phonenumber: {
        type: String,
    },
},
    // timestamps özelliği, her kullanıcının oluşturulma ve güncellenme tarihlerini otomatik olarak kaydeder. createdAt ve updatedAt alanları, sırasıyla kullanıcının oluşturulma ve güncellenme tarihlerini tutar. Bu sayede, kullanıcıların ne zaman oluşturulduğunu ve ne zaman güncellendiğini kolayca takip edebiliriz.
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

class Users extends mongoose.Model {

}

userSchema.loadClass(Users); // userSchema'ya Users sınıfını yükleyerek, Users sınıfının özelliklerini ve yöntemlerini userSchema'ya ekliyoruz. Bu sayede, Users sınıfında tanımlanan özellikler ve yöntemler, userSchema üzerinden erişilebilir hale gelir.
module.exports = mongoose.model('Users', userSchema); // userSchema'yı 'Users' adlı bir model olarak dışa aktararak, diğer dosyalarda bu modeli kullanarak kullanıcılarla ilgili işlemler yapabilmemizi sağlıyoruz. Bu model, veritabanında 'Users' koleksiyonunu temsil eder ve bu koleksiyona kullanıcı verilerini eklemek, güncellemek, silmek gibi işlemleri gerçekleştirmek için kullanılabilir.

