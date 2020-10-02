// == IMPORT server EXPRESS
const express = require('express');

// MEP du router
const router = express.Router();

// MEP des ROUTES
router.get('/', (req, res) => {
    res.send('hello');
  });

module.exports = router;