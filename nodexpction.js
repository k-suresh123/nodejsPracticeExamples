fs=require("fs")
fs.readFile("abcd.txt",function(err,data){
if(err){
throw(err)
console.log(data.toString())
}
})
process.on("uncaughtException",function(err){
console.log("file not found")
})