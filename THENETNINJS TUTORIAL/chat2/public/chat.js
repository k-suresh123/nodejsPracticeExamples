
var socket =  io.connect("http://localhost:8000")

//io input out put of socket library
/*io.connect contain full adres of port 
 to connect socket from client to server
 **/
 
 
 
 var message = document.getElementById("message")
 
 var handle = document.getElementById("handle")

 var btn = document.getElementById("send")

 var output = document.getElementById("output")
 
  var feedback = document.getElementById("feedback");
  
  btn.addEventListener("click",function(){
	  
	  //simple send message to the server side
	
	  socket.emit("c2s",{message:message.value,handle:handle.value})
  });
  
  message.addEventListener("keypress",function(){
	  
	  socket.emit("typing",handle.value)
  })
  
  socket.on("s2c",function(data){
	  feedback.innerHTML = ""
	  output.innerHTML += '<p><strong>' +data.handle +':</strong>'+
	  data.message + '</p>'
  })
  
  socket.on("typing",function(data){
	  
	  feedback.innerHTML = "<p><em>" + data +"is typing a message ... </em> </p>";
	 
  })


 
 