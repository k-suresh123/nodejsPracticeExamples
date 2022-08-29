const express = require('express');
const router = express.Router();
const Ninja =  require('../models/ninja');
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler =  require('../middeleware/async')


     router.get('/ninjas',asyncHandler(async function(req,res){
          const data = await Ninja.find();
          res.status(200).send({success:"true",result:data})
       })
      )

     
    router.post('/ninjas/:id', asyncHandler(async function(req,res,next){
          const data =   await Ninja.findById(req.params.id)
          if(!data){
              next(new ErrorResponse(`ninja not found with id of ${req.params.id}`,404))
           }
          res.status(200).send({success:true,result:data})
      }))
    

     router.post('/ninjas', asyncHandler(async function(req,res,next){
         await Ninja.create(req.body)
     }))

     router.delete('/ninjas/:id', asyncHandler(async function(req,res,next){
    
         const data =  await Ninja.findByIdAndDelete(req.params.id);
         if(!data){
          return next( 
               new ErrorResponse(`ninja not found with id of ${req.params.id}`,404)
             )
         }
        res.status(200).send({success:true,result:data})
     }))


module.exports = router;
