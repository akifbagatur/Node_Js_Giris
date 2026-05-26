const express = require("express");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(`
          <html>
          <head>
          </head>
          <title>Ürün Ekleme Sayfası</title>
          <body>
              <h1>Ürün Ekleme Sayfası</h1>
              <form action="/admin/add-product" method="POST">
                  <input type="text" name="product_name" placeholder="Ürün Adı">
                  <button type="submit">Ürün Ekle</button>
              </form>
          </html>`);
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); // Yönlendirme işlemi yapar, ana sayfaya yönlendirir.
});

module.exports = router; // admin.js dosyasını dışarı aktarır.
