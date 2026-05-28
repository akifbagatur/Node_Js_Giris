const mongoose = require('mongoose');

// rolesSchema, rollerin veritabanında nasıl saklanacağını tanımlayan bir şema. Bu şema, rollerin name ve description gibi bilgilerini içerecek şekilde tasarlanmıştır. Ayrıca, timestamps özelliği sayesinde her rolün oluşturulma ve güncellenme tarihleri otomatik olarak kaydedilecektir.
const rolesSchema = new mongoose.Schema({
    rolesname: {
        type: String,
        required: true,
    },
    isactive: {
        type: Boolean,
        default: true,
    },
    creadedby: {
        type: moongoose.Schema.Types.ObjectId,
        required: true,
    },
},
    // timestamps özelliği, her kullanıcının oluşturulma ve güncellenme tarihlerini otomatik olarak kaydeder. createdAt ve updatedAt alanları, sırasıyla kullanıcının oluşturulma ve güncellenme tarihlerini tutar. Bu sayede, kullanıcıların ne zaman oluşturulduğunu ve ne zaman güncellendiğini kolayca takip edebiliriz.
    {
        versionKey: false, // versionKey özelliği, MongoDB'nin otomatik olarak eklediği __v alanını devre dışı bırakır. Bu alan, belge sürümünü takip etmek için kullanılır, ancak bazı durumlarda gereksiz olabilir ve veritabanında yer kaplayabilir. versionKey: false olarak ayarlandığında, __v alanı belgelerde oluşturulmaz ve veritabanında saklanmaz.
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

class Roles extends mongoose.Model {

}

rolesSchema.loadClass(Roles); // rolesSchema'ya Roles sınıfını yükleyerek, Roles sınıfının özelliklerini ve yöntemlerini rolesSchema'ya ekliyoruz. Bu sayede, Roles sınıfında tanımlanan özellikler ve yöntemler, rolesSchema üzerinden erişilebilir hale gelir.
module.exports = mongoose.model('roles', rolesSchema); // rolesSchema'yı 'roles' adlı bir model olarak dışa aktararak, diğer dosyalarda bu modeli kullanarak rollerle ilgili işlemler yapabilmemizi sağlıyoruz. Bu model, veritabanında 'roles' koleksiyonunu temsil eder ve bu koleksiyona rol verilerini eklemek, güncellemek, silmek gibi işlemleri gerçekleştirmek için kullanılabilir.

