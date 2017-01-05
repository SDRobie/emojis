var http = require('http');
var emoji = require('node-emoji');

var server = http.createServer(function (req, res){
  res.write(emoji.random().emoji);
  res.end();
});
server.listen(3000);
console.log('Server on port 3000...');
