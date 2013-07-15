var express = require('express');
var fs=require('fs');
var buffer=require('buffer');
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
    data2=data.toString();
 return data2;
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data2);
}); 

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
