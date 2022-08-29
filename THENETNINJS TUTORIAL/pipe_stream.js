http = require("http")
f = require("fs")

http.createServer(
function(req,res){
	console.log("req was made"+req.url)
	res.writeHead(200,{"Content-Type":"text/plain"})
	var myReadStream = f.createReadStream(__dirname+'/readMe.txt','utf8')
	myReadStream.pipe(res)
	
}

).listen(1200)