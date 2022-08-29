const fetch =  require('./fetch_moduls')

let iteral =  function(val){

it.next(val)
}

let getLocation = function(promise,callback){
   promise.then((data)=>{
    let location = JSON.parse(data).location
	callback(location)
   })
   .catch((err)=>{ console.log(err) })
 }
 
 
 let getMessage = function(promise, callback){
    promise.then((data)=>{
	   callback(data)
	})
	.catch((err)=>{console.log(err)  })
 
 }
 
 let printMessage = function(message){
   console.log(message)
 }
 
 let run = function *(callback){
   let location = yield getLocation(fetch('./data.json'),iteral)
   let message = yield getMessage(fetch(location),iteral)
   callback(message)
 }
 
 let it = run(printMessage)
 it.next();