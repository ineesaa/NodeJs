const fs = require('fs');
const path = require('path');
// Read JSON file
const filePath = path.join(__dirname, 'data.json');
const jsonData = fs.readFileSync(filePath, 'utf-8');
// Parse JSON
const obj = JSON.parse(jsonData);
// Modify object
obj.isBillionaire = true;
obj.skills.push('Focus');
// Write updated JSON
const newJson = JSON.stringify(obj, null, 2);
fs.writeFileSync(path.join(__dirname, 'data-updated.json'), newJson);

console.log('Updated JSON saved.');
