var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('mental-health', { title: 'Express' });
});

router.get('/face-to-face-yes', function(req, res) {
  res.render('mental-health/face-to-face-yes', { 'face-to-face-health-phone-number': '116 123' });
});

router.get('face-to-face-no', function(req, res) {
  res.render('mental-health/face-to-face-no', { 'mental-health-phone-number': '116 123' });
});

module.exports = router;
