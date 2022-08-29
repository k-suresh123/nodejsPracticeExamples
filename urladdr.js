ur = require("url")
str = "http://localhost.com/fold/subfold/web?sno=100&uname=scott";
address = ur.parse(str,true)
console.log(address.host)
console.log(address.pathname)
console.log(address.search)
qy = address.query
console.log(qy.sno)
console.log(qy.uname)