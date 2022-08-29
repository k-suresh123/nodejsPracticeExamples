exp = require("express")
f = require("express-fileupload")
app = exp()
app.use(f())
app.listen(1000)
app.post("/met1",(req,res)=>{
	
	i=0;
	t = setInterval(function(){
		
				if(i< req.files.f1.length)
		{
	       dt= new Date();
          cont = req.files.f1[i]
          fname = dt.getTime()+req.files.f1[i].name		  
  		  cont.mv("uploads/"+fname)
		  i++
		}
		else
		{
		   clearInterval(t)
		   res.send("uploaded")
		   
		}

	},10)
})



