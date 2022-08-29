exp = require("express");
app = exp();

app.listen(3000)
app.get('/',(req,res)=>{
res.send("welcome")
})
console.log("started")