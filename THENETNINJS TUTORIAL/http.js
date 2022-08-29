var http = require("http")

var server = http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hey ninjas')
});

//url  127.0.1.1:3000

server.listen(3000, '127.0.1.1');
console.log("yo dawsgs, now listening to port 3000")