var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', res.render('index'));

router.get('/template', res.render('index'));

router.get('/:file', function(req, res) {
    res.render(req.params.file)
});

module.exports = router;