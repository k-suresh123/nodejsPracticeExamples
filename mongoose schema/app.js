const express = require("express");
const bp =  require("body-parser");
const mongoose = require('mongoose');
const errorhandler = require('./middeleware/error')
//set up express app
const app = express();
app.use(bp.json())





//connect to db
mongoose.connect('mongodb://localhost/ninjago',{
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: true,
	useUnifiedTopology: true
   
  });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connection to mongodb")
});



//initialize routes
app.use('/api',require('./routes/api'));

app.use(errorhandler)

//listen for requests
app.listen(4000,function(){
	console.log("now listening for requests");
	
})








