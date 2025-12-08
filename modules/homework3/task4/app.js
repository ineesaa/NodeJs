const fs = require('fs');
const path = require('path');
//Get file path from CLI
const inputPath = process.argv[2];
if (!inputPath) {
  console.log('Please provide a JSON file path');
  process.exit(1);
}
//Path info
console.log('Directory:', path.dirname(inputPath));
console.log('Base name:', path.basename(inputPath));
console.log('Extension:', path.extname(inputPath));
console.log('Parsed:', path.parse(inputPath));
//Read JSON
const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
//Add timestamp
data.timestamp = new Date().toISOString();
//Prepare output folder
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
//Save updated JSON
const outputPath = path.join(outputDir, path.basename(inputPath));
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
//Convert to buffer
const buffer = Buffer.from(JSON.stringify(data));

console.log('Hex buffer:', buffer.toString('hex'));
console.log('Decoded buffer:', buffer.toString());
