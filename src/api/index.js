const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Testing API 😎'
  });
});

module.exports = router;