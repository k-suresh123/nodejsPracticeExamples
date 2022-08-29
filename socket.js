var net = require("net")
var server = net.createServer(function(socket){
console.log(socket.id)
socket.end("Hello and GoodBye");
})
server.listen(1234)
console.log("server started")