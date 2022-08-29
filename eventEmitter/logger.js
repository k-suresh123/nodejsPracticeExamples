const EventEmitter = require('events')
const emitter = new EventEmitter();

function log(message){
//send an HTTP Request
console.log(message);

//Raise an event
emitter.emit("messageLogged",{id:1,ur:'http://url'})
}
module.exports = log;