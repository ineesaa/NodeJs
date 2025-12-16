const fs = require('fs');

fs.writeFileSync('original.txt', 'Some text');

fs.copyFileSync('original.txt', 'copy.txt');

fs.renameSync('copy.txt', 'renamed.txt');

console.log(fs.readdirSync(__dirname));
fs.unlinkSync('original.txt');
fs.unlinkSync('renamed.txt');
