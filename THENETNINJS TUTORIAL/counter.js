var counters = function(arr){
 return `this is array length ${arr.length} ` 
}

var add = function(a,b){
 return `sum of ${ a} and ${ b} is ${a+b} ` 
}

var pi = 3.45;

module.exports.counters = counters
module.exports.add = add;
module.exports.pi = pi;


 /** second way of passing obj

 module.exports = {
	counters  :counters,
	add : add,  
	pi :pi
	 
	
} */