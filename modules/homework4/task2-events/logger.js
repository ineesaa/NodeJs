const fs = require('fs');
const EventEmitter = require('events');
const logger = new EventEmitter();
logger.on('info', msg => {
  fs.appendFileSync('info.log', msg + '\n');
});
logger.on('warn', msg => {
  fs.appendFileSync('warn.log', msg + '\n');
});
logger.on('error', msg => {
  fs.appendFileSync('error.log', msg + '\n');
});

logger.emit('info', 'Info message');
logger.emit('warn', 'Warning message');
logger.emit('error', 'Error message');
