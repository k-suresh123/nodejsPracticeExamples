exp = require("express")
f = require("fs")





f.writeFile("abcd.txt","welcome", (err,result)=>{ 

if(err)
	console.log(err)
else{
	console.log(result)

}

})


f.readFile("abcd.txt", (err,result)=>{ 

if(err)
	console.log(err)
else{
	console.log(result.toString())

}

})

f.appendFile("abcd.txt","moredata",(err,result)=>{ 

if(err)
	console.log(err)
else{
	console.log("created")

}

})

f.rename("abcd.txt","ranme.txt",(err,result)=>{ 

if(err)
	console.log(err)
else{
	console.log("file renamed")

}

})










