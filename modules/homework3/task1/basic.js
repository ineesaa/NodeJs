const path = require('path');
// Current directory 
console.log('Directory name:', __dirname);
// Current file
console.log('File base name:', path.basename(__filename));
// File extension
console.log('File extension:', path.extname(__filename));
// Join path segments
const joinedPath = path.join('src', 'utils', 'data.json');
console.log('Joined path:', joinedPath);
