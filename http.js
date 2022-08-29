var http = require("http")

var server = http.createServer(function(req,res){

if(req.url == '/get'){
	console.log("server enters")
res.writeHead(200,{"Content-Type":"text/plain"});
res.end("welcommt to my firs node.js server");
}
} )


server.listen(1234,()=>{
console.log("server startd")
})


