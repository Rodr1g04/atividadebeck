const express = require('express');
const { verificarToken } = require('../middlewares/authMiddleware.js');
const router = express.Router();

/* GET home page. */
router.get('/', verificarToken, function(req, res, next) {
  res.json([]);
});

module.exports = router;
