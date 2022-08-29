const fs = require('fs')

let printMessage = function(message){

console.log(message)
}

let run = function(callback){
   let locationString = fs.readFileSync('./data.json','utf-8')
   let location = JSON.parse(locationString).location
   let message = fs.readFileSync(location,'utf-8')
   callback(message)
}

run(printMessage)