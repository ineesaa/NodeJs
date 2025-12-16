const fs = require('fs');
const logger = require('./logger');

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

logger.emit('log', 'App started');
logger.emit('log', 'Loading modules');
logger.emit('log', 'Processing data');
logger.emit('log', 'Saving results');
logger.emit('log', 'App finished');
