const ErrorResponse = require('../utils/errorResponse')
const errorHandler = (err,req,res,next)=>{
     
  let error  =  {...err}
   error.message = err.message;
      console.log(err)

      if(err.code == 11000){
        const message = `duplicate key entered. ${err.value}`;
        error = new ErrorResponse(message,404);   
       }

      



   //mongoose bad objectId invalid id 
   if(err.name == 'CastError'){
     const message = `Ninja not with id of ${err.value}`;
     error = new ErrorResponse(message,404);   
    }
   
   res.status(error.statuscode || 500).json({
       success :false,
       error: error.message || 'Server Error'
   })
    }
    module.exports = errorHandler