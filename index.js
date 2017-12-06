var express = require('express'); // call express
var app = express(); // define our app using express
var rootRoutes = require('./router');
var bodyParser = require('body-parser'); // define our app is using body-parser

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our portt

app.use('/', rootRoutes);
app.listen(port);
