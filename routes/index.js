var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index')
});

router.get('/template', function(req, res) {//一応回避
    res.render('index')
});

router.get('/:file', function(req, res) {
    res.render(req.params.file)
});

module.exports = router;