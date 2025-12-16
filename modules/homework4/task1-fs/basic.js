const fs = require('fs');
const filename = 'test.txt';
//Check if file exists
if (!fs.existsSync(filename)) {
  fs.writeFileSync(filename, '');
  console.log('File created');
}
// Write text
fs.writeFileSync(filename, 'Hello Node.js\n');
//Read file
const content = fs.readFileSync(filename, 'utf-8');
console.log('File content:', content);
//Append text
fs.appendFileSync(filename, 'This is appended text\n');
//Delete file
fs.unlinkSync(filename);
console.log('File deleted');
