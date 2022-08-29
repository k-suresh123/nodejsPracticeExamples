log = console.log

var util = require("util")
var event =  require("events")


function parents(name,id,more){
	this.name = name;
	this.id = 1;
    this.more = more;
}

parents.prototype.fun = function(){
		log(this.name+'='+this.id+'='+this.more)
	}

function child(name,id){
	this.name = name;
	this.id = id
	
	
}

util.inherits(child,parents)

r = new parents("krish",3,"more")
r.fun();

ref = new child("ram","99")
ref.fun()
