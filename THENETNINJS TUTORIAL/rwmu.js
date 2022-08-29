
var fs = require('fs')
//mkdirSync
fs.mkdir('stuff',function(){
   fs.writeFile('./stuff/writeMe.txt','this isnot writesync',function(){
	   
	   fs.readFile('./stuff/writeme.txt','utf8',function(err,data){
		  if(err)
			  console.log(err)
		  else
			  console.log(data)
		   
	
		 
		 
	   })
   })   
	
})

/*
	 fs.unlink("./stuff/write.txt",function(){
			    if(err)
	  console.log(err)
      else{
			 
		     fs.rmdir('stuff',function(err,result){
	  if(err)
	  console.log(err)
	     })
		 }
		 
	   })
	**/