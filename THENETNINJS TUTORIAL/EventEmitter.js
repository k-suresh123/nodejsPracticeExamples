var events = require("events")
var util = require("util")

   var Person = function(name){
	    this.name = name;
	   
   }
   
   util.inherits(Person,events.EventEmitter)
   
   john = new Person("john")
   vijay = new Person("vijay")
   rey = new Person("rey")
   
   pepole = [john,vijay,rey]
   
   pepole.forEach(function(person){
	    person.on("speak",function(msg){
			console.log(`iam ${person.name},${msg}`)
		})
	   
   })
   
   john.emit("speak","hey what r u doing");
   rey.emit("speak","nothing just programing")
   