var express = require('express'); // call express
var DB = {};

var router = express.Router(); // get an instance of the express Router

router.post('/assignment', function(req, res, next) {
  var assignment_type = req.body.assignment_type;
  var test_id = req.body.test_id;
  var student_id = req.body.student_id;
  var assignment_content = req.body.assignment_content;
  //Save into fake db
  if (assignment_type && test_id && student_id && assignment_content) {
    if (!DB[test_id])
      DB[test_id] = {};
    DB[test_id][student_id] = req.body;
    res.status(200)
      .json({
        message: 'Stored in our DB'
      });
  } else {
    var err = new Error('Missing parameters!');
    err.status = 403;
    next(err);
  }
});

router.get('/assignment/:test_id', function(req, res, next) {
  var test_id = req.params.test_id;
  if (test_id) {
    res.status(200)
      .json(DB[test_id]);
  } else {
    var err = new Error('Missing parameters!');
    err.status = 403;
    next(err);
  }
});

router.get('/', function(req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});

router.post('/', function(req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});


module.exports = router;
