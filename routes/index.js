var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/:file', function(req, res) {
  res.render(req.params.file);
});

module.exports = router;