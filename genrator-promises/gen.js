const fs = require('fs')

let handleResponse = function(err,resp){
 if(err){ throw new Error(err) }
 let data = JSON.parse(resp)
 it.next(data.location)
}

let handleMessage = function(err,resp){
   if(err){ throw new Error(err) }
   it.next(resp)
}

let printMessage = function(message){
 console.log(message)
}

let run = function(callback){
 let location = yield fs.readFile('./data.json','utf-8',handelResponse)
 let  message = yield fs.readFile(location,'utf-8',handleMessage)
}

let it * run(printMessage)
it.next()


