'use strict'

let path = require('path');
let request = require('request');

module.exports = (app) => {
  
  let sendFile = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  };
  
  app.get('/', sendFile);

  app.get('/randomize', (req, res) => {
  	
  	if (req.query.players === undefined) {
  	  return;
  	}
  	
  	let options = {
  	  uri: 'https://smitepartyservice.herokuapp.com/api',
  	  json: {
  	  	players: req.query.players,
  	  	roles: req.query.roles
  	  }
  	};

  	request(options, (err, apiRes, body) => {
  	  if (err) {
  	  	res.send(err);
  	  } else {
  	  	console.log(body)
  	  	res.send(body);
  	  }
  	});

  });

  app.get('/test', (req, res) => {
    console.log('/test request received!');
    console.log('test req body: ', req.query);
    console.log(req.query.testing);
    res.send({myResponse: 'Hello darkness'});
  });

};