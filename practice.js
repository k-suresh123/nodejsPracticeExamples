
express = require("express");
app  = express();

app.get('/',(req,res)=>{
	res.send("hi thsi is server")
	
})

app.listen(3000,()=>{ console.log("started") })

 