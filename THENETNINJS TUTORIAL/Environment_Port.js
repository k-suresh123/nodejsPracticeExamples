
// set windows environment variable  for port

// cmd:  set PORT = 5000;

// joy for validation  package
const Joi = require('joi')
const express = require('express')
const app = express();

app.use(express.json());


var courses = [
{id :1,name: 'courese1'},
{id :2,name: 'courese2'},
{id :3,name: 'courese3'},
]





app.get('/',(req,res)=>{
res.send('Helo World')
})

//parameter
app.get('/api/courses/:id',(req,res)=>{
	
	res.send(req.params.id);
})


//get all courses
app.post('/api/courses/',(req,res)=>{
	
	res.send(courses);
})

app.get('/api/multiparams/:year/:month',(req,res)=>{
	
	res.send(req.params);
})

//read query string parameters

app.get('/api/queryparams/:year/:month',(req,res)=>{
	
	res.send(req.query);
})




app.get('/api/getcourse/:id',(req,res)=>{
	
 const crs =	courses.find( v => v.id == parseInt(req.params.id) )
 if(!crs) res.status(404).send('The course with the givn id not available')
 res.send(crs);
})

app.post('/api/courses',(req,res)=>{
/*	if(!req.body.name || req.body.name.length < 3){
		res.status(400).send(`name should be minimum 3 charecters`)
		return;
	}
	**/
// joi validator for body parameters

 const { error }= validateCourse(req.body);


if(result.error){
		res.status(400).send(result.error.details[0].message)
		return;
	}
	
		
	
   const course = {
	   id: courses.length +1,
	   name: req.body.name,
	   mno:req.body.mno
	};
	courses.push(course);
	res.send(course)
	
})

app.put('/api/courses/:id',(req,res)=>{
	// Look up the course 
	//If not existing ,return 404
	
   	const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("course with the given id was not found")	
	
   //object destructuring
   //validate,,If invalid ,return
   const { error }= validateCourse(req.body);
   if(error){
	  	res.status(400).send(error.details[0].message)
		return;
   }
  
  //update course name;  
    course.name =  req.body.name;
	res.send(course)
 })

function validateCourse(bodys){
  const schema =  {
	name: Joi.string().min(3).required()
};
const result = Joi.validate(bodys,schema);
return result	
	
}

app.delete('/api/courses/:id',(req,res)=>{
	//Look up the course
	//Not existing ,return 404
	
	const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("course with the given id was not found")
	
	//Delete
	const index = courses.indexOf(course);
	courses.splice(index,1);
	
	//Return the same course
      res.send(course);
})





const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}..`));