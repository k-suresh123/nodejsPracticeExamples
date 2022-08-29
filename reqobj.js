exp = require("express")
app = exp()
app.listen(1000)
reqobj = require("request")
app.get("/met1", function(req,res){
	
	console.log("server1000 started")
	 reqobj({
               url:"http://localhost:2000/reqobj",
			   method :"get"
	       },(err,response,body)=>{
               if(err)
                  response.send(err)
               else{
                   console.log(response);
                    res.send(body)				   
			       }              
		                          }
	
	       )
		   console.log("end")
	
   		
})  

