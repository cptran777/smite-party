'use strict'
/******************* INIT DEPENDENCIES *********************/

let express = require('express');
let bodyparser = require('body-parser');
let http = require('http');
let request = require('request');

let app = express();

/***************** INIT CUSTOM MODULES *********************/
let router = require('./routes');

/******************* INIT MIDDLEWARE ***********************/

app.use(express.static(__dirname + '/../client/public'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());

/********************* INIT SERVER *************************/

router(app);
let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log('Listening on port', port);
});
