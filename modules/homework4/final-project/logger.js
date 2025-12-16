const fs = require('fs');
const EventEmitter = require('events');

const logger = new EventEmitter();

logger.on('log', msg => {
  fs.appendFileSync('logs/app.log', msg + '\n');
});

module.exports = logger;
