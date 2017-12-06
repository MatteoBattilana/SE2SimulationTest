var express    = require('express');        // call express
var DB = {};
var port = 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

router.post('/assignement/:idTest', function(req, res,next) {
    var idStudent = parseInt(req.body.idStudent);
    var idTest = parseInt(req.params.idTest);
    var textContent = req.body.textContent;
    //Save into fake db
    if(idStudent && idTest && textContent){
    	if(!DB[idTest])
    		DB[idTest] = {};
	DB[idTest][idStudent]=textContent;
    	res.status(200)
    	   .json({ message: 'Stored in our DB' });
    }
    else{
    	var err = new Error('Missing parameters!');
    	err.status = 403;
    	next(err);
    }
});

router.get('/assignement/:idTest', function(req, res,next) {
    var idTest = parseInt(req.params.idTest);
    if(idTest){
    	res.status(200)
    	   .json(DB[idTest]);
    }
    else{
    	var err = new Error('Missing parameters!');
    	err.status = 403;
    	next(err);
    }
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


module.exports = router;
