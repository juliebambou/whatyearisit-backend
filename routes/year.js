var express = require('express');
var router = express.Router();




router.get('/', (req, res) => {
    const date = new Date();
    res.json({ year: date.getFullYear().toString()});
  });





module.exports = router;
