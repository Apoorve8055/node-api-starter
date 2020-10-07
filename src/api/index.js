const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Testing API 😎'
  });
});

router.get('/home', (req, res) => {
  res.json({
    message: 'Testing home API 😎'
  });
});

module.exports = router;
