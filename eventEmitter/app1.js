//sharing events emitter between modules



const EventEmitter = require('events')

const Logger = require('./logger1')
const logger =  new Logger();

//Register a Listener

logger.on('messageLogged',(arg)=>{
 console.log('Listener called',arg)
})

logger.log('message')