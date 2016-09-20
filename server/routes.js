var path = require('path');

module.exports = function(app) {
  
  var sendFile = function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  };
  
  app.get('/', sendFile);

};