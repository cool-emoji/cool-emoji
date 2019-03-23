var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Please pick one of the options below' });
});

module.exports = router;
