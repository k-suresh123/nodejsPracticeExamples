
 console.log(__dirname)
 console.log(__filename)


var time =0;
  t = setInterval(function(){ 
          
	if( time < 1)
	 { 
	   time++
	   console.log(time)
	 }else
	 {
		 clearInterval(t)
		  console.log("end")
	  
	 }
	
     

  },2000)
  
  
  setImmediate(function(){
	  
	  console.log("iam immediate")
  })