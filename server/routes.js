let path = require('path');
let request = require('request');

module.exports = (app) => {
  
  let sendFile = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  };
  
  app.get('/', sendFile);

  app.get('/randomize', (req, res) => {
  	
  	if (req.body.players === undefined) {
  	  return;
  	}
  	
  	let options = {
  	  uri: 'http://127.0.0.1:8000/api',
  	  json: {
  	  	players: req.body.players,
  	  	roles: req.body.roles
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
    res.send({myResponse: 'Hello darkness'});
  });

};