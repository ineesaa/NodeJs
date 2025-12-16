const fs = require('fs');

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}
fs.writeFileSync('logs/info.log', 'Info message');
fs.writeFileSync('logs/warning.log', 'Warning message');
fs.writeFileSync('logs/error.log', 'Error message');

const files = fs.readdirSync('logs');
console.log('Log files:', files);
files.forEach(file => {
  fs.unlinkSync(`logs/${file}`);
});
fs.rmdirSync('logs');
