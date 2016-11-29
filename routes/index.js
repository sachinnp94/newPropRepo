var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html.ejs', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home.html.ejs', { title: 'Express' });
});

module.exports = router;
