const express = require("express");
const router = express.Router();

router.get("", (req, res, next) => {
  res.send("<h1>Ana Sayfa</h1>"); // Tarayıcıya "Ana Sayfa" yazısını gönderir.
});
module.exports = router; // user.js dosyasını dışarı aktarır.
