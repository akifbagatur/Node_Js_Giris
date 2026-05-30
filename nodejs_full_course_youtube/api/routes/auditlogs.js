const express = require('express');
const router = express.Router();

// GET /auditlogs
router.get('/:id', (req, res) => {
    // İstekle ilgili bilgileri JSON formatında döndürür. 
    // Bu bilgiler, istek gövdesi (body), sorgu parametreleri (query), URL parametreleri (params) ve HTTP başlıkları (headers) gibi detayları içerir. 
    // Bu sayede, gelen istek hakkında kapsamlı bir bilgi sunarak, uygulamanın nasıl çalıştığını ve gelen verilerin nasıl işlendiğini anlamaya yardımcı olur.
    res.json({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers
    });
});

module.exports = router; 
// router değişkenini modül olarak dışa aktarır. 
// Bu sayede, diğer dosyalarda (örneğin, app.js) bu rotayı kullanarak uygulamanın belirli bir bölümünde (örneğin, "/auditlogs") bu rotaya gelen istekleri işleyebilirsiniz. 
// Bu, uygulamanın farklı bölümlerinin birbirinden bağımsız olarak geliştirilmesine ve yönetilmesine olanak tanır.