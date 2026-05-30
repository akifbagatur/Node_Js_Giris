const express = require("express");
const router = express.Router();

/* GET categories listing. */
router.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

module.exports = router;
