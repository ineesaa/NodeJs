const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
emitter.on('start', () => {
  console.log('Process started');
});

emitter.on('finish', () => {
  console.log('Process finished');
});

emitter.emit('start');
emitter.emit('finish');
