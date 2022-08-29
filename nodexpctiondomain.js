domain=require("domain").create()

domain.run(function(){

   file=require("fs")
   file.readFile("abc.txt",function(err,data){
     if(err){
       throw(err)
      }
       console.log(data.toString())
   }
) 
})

domain.on("error",function(error){
	console.log(error)
})

