var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Sandbox', data: 'null'});
});
router.post('/', function(req, res, next) {

  res.render('index', {title: 'The Sandbox', data: 'logs'});
});
module.exports = router;
