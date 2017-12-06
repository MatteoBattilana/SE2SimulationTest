var express    = require('express');        // call express
var DB = {};
var port = 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


module.exports = router;
