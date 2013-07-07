var express = require('express');
var fs=require('fs');
var buffer=require('buffer');
 fs.readFile('index.html', function (err, data) {
  if (err) throw err;
console.log(data.toString());
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs);
}); 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
