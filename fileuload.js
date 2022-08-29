exp = require("express")
f = require("express-fileupload")
app = exp()
app.use(f())
app.listen(1000)

app.post("/met1",(req,res)=>{
	
	if(req.files.f1.mimetype == "image/jpeg" || req.files.f1.mimetype == "image/jpg")
	{
		fname =(req.files.f1.name)
		fileobj = req.files.f1
		req.files.f1.mv("uploads/"+fname)
		res.send("upload")
	}
	else
	{ 
            res.send("file not supported")
     }
	
	
})