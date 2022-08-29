request = require("request")
request({
	 uri:"http://www.onlinebulksmslogin.com/spanelv2/api.php?username=NalaxIt&password=nalaxit@123&to=9030745144&from=NALAXI&message=iam good",
	 method:"post"
        },
		function(err,response,body){
			
			if(err)
				console.log(err)
			else
				console.log(body)
	
		})