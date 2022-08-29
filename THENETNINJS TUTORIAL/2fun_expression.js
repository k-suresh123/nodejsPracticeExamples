
function defination()
{
 console.log("function defnation,iam global and support variable hosting")
}


var expression = function(x)
{
	console.log(x)
 console.log("function expression,i do not support variable hosting")
}


defination();
expression(2);


//call function as an argument



function passFunArguments(fun)
{
fun(1);
}

passFunArguments(expression);


