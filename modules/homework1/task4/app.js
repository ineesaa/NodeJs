const utils = require("./utils");

console.log("Date:", utils.date.formatDate(new Date()));
console.log("Random:", utils.random.randomInt(1,100));
utils.logger.log("This is a log message");
