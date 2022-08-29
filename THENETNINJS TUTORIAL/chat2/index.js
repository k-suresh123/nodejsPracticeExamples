var express =require("express")
var socket  = require("socket.io")

var app = express();

var server = app.listen(8000,function(){
console.log('this server is listening on the port 8000')
})

app.use(express.static('public'));

var io = socket(server) //this method create a connection to the server

//connection is the event handler
/*client socket ,when client socket connect  with server socket
 this function execute 
 uniqure id created for each client
  **/

io.on("connection",function(socket){
	socket.on("c2s",function(data){
		
		io.sockets.emit("s2c",data);
	})
	
	socket.on("typing",function(data){
		//broadcast method doesnt print in my browser window but all other
		socket.broadcast.emit("typing",data)
	})
	
	
	
})