rt = exp();
rt.get("/route",(req,res)=>{
res.send("iam router of nodejs,export services from one file to anothr file")
})
module.exports = rt;