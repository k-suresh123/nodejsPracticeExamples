var util = require("util")

var Animal = function(name){
	this.name = name;
}

Animal.prototype.walk = function(){
	console.log(this.name+":is walking")
	
}

var Rabit = function(name){
	this.name = name;
}

util.inherits(Rabit,Animal)

Rabit.prototype.jump= function(){
	
	console.log(this.name+":is jumping")
}


rabit = new Rabit("Rabit")

rabit.jump();
rabit.walk();