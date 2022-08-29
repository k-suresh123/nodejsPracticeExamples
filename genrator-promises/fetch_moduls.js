const fs = require('fs')

let fetch = function(url){
  let promise = new Promise((resolve,reject)=>{
   fs.readFile(url,'utf-8',(err,data)=>{
    if(err){ reject('sorry bro,it broke...') }
	resolve(data)
   })
  
  })
  return promise
}

module.exports = fetch 