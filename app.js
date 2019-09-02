var express = require('express');
var path = require('path');
var http = require('http');
var urlPort = 8000;

var app = express();

var server = http.createServer(app).listen(urlPort, () => {
  console.log("Speedway");
  console.log("Open " + urlPort + " web server ");
});

app.use('/',express.static('./static'));