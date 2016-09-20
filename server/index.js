/******************* INIT DEPENDENCIES *********************/

var express = require('express');

var app = express();

/***************** INIT CUSTOM MODULES *********************/
var router = require('./routes');

router(app);
/******************* INIT MIDDLEWARE ***********************/

app.use(express.static(__dirname + '/../client/public'));

/********************* INIT SERVER *************************/

var port = process.env.PORT || 3000;
var server = app.listen(port, ()=>{
  console.log('Listening on port', port);
});
