const path = require('path');
// Messy path
const messyPath = '/folder//subfolder/../file.txt';
// Normalize path
const normalizedPath = path.normalize(messyPath);
console.log('Normalized path:', normalizedPath);
// Parse path
const parsedPath = path.parse(normalizedPath);
console.log('Parsed path:', parsedPath);
// Format path back
const formattedPath = path.format(parsedPath);
console.log('Formatted path:', formattedPath);
