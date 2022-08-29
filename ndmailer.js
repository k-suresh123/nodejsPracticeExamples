mailer = require("nodemailer")
mailserver = mailer.createTransport({

service:"Gmail",
auth:{

user:"suri.maa@gmail.com",
pass:"K@thagatu2"
}
})

mailserver.sendMail({
        from:"suri.maa@gmail.com",
		to:"kottagattu.suresh@gmail.com",
		subject:"test mail",
		html:"<input type='text' ><a href ='#'>click</a>"
 },function(err,result){
   if(err)
   console.log(err)
   else
   console.log(result)
 
 }
 )