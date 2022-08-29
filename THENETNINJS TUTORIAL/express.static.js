
/*

The express.static middleware is responsible for serving the static assets of an Express.js application.
 The express.static() method specifies the folder from which to serve all static resources.


**/


var express = require('express');
var app = express();

//setting middleware
app.use(express.static('public')); //Serves resources from public folder


app.use('/resources',express.static('./images'));

var server = app.listen(5000,function(){
	console.log("started")
});


//  using node-static module serve the resources from folder

/*
var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(5000);



**/