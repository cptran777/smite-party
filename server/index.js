/******************* INIT DEPENDENCIES *********************/

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

/***************** INIT CUSTOM MODULES *********************/
var router = require('./routes');

router(app);
/******************* INIT MIDDLEWARE ***********************/

app.use(express.static(__dirname + '/../client/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());

/********************* INIT SERVER *************************/

var port = process.env.PORT || 3000;
var server = app.listen(port, ()=>{
  console.log('Listening on port', port);
});
