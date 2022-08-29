const fs = require('fs')

let handelResponse = function(err,resp){
   if(err){ throw new Error(err)}
   let data = JSON.parse(resp)
   readMessage(data.location)
}

let handleMessage = function(err,resp){
  if(err){ throw new Error(err)}
  printMessage(resp)
 }
 
 let readLocation = function(){
 fs.readFile('./data.json','utf-8',handelResponse)
 }
 
 let readMessage = function(location){
 fs.readFile(location,'utf-8',handleMessage)
 }
 
 let printMessage = function(message){
 console.log(message)
 }
 readLocation();
 
 
 
