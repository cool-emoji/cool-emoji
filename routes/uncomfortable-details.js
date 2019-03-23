var express = require('express');
var router = express.Router();

const submitDetails = (details) => {
  console.log('received details to process' + JSON.stringify(details));
};

router.get('/', function(req, res) {
  res.render('uncomfortable-details', { title: 'If there were any uncomfortable details that you would like to share..' });
});

router.post('/submit', function(req, res) {
  submitDetails({'details': 'I am not doing so well..'});
  // TODO - req.body not being passed in..?
  res.redirect('submitted');
});

router.get('/submitted', (req, res, next) => {
  res.render('uncomfortable-details/submitted');
});

router.get('uncomfortable-details/thank-you-submitted');

module.exports = router;
