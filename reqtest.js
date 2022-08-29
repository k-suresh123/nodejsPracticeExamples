exp = require("express")
app =  exp()

app.listen(2000,function(){
	console.log("started")
})

reqobj = require("request")


app.get("/serv1",(req,res)=>{
reqobj({url:"http://localhost:1000/server2",method:"get"},
 (err,response,body)=>{
	 
	console.log(response)
	res.send(body)
 }
)
	
console.log("server1 started end")	
})
