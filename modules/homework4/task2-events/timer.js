const EventEmitter = require('events');
const emitter = new EventEmitter();
let count = 0;
const interval = setInterval(() => {
  count++;
  emitter.emit('tick', count);
  if (count === 5) {
    emitter.emit('done');
    clearInterval(interval);
  }
}, 1000);

emitter.on('tick', (n) => {
  console.log('Tick:', n);
});

emitter.on('done', () => {
  console.log('Timer finished');
});
