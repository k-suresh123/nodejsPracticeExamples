tokenref = require("jsonwebtoken")
payload ={
     "name":"scott",
	 "email":"scott@gmail.com"  
        }
key = "!@#$"
tk =tokenref.sign(payload,key,{expiresIn:"5h"})
console.log(tk)
console.log(tokenref.decode(tk))