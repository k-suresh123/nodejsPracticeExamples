const EventEmitter = require('events')
const emitter = new EventEmitter();

//regitster a listener
emitter.on('messageLogged',(arg)=>{
console.log('listener called',arg)
})

const log = require('./logger')
log('message')

