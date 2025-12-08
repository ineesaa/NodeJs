// Create buffer from string
const text = 'Hello Node';
const buffer = Buffer.from(text, 'utf-8');
console.log('Buffer:', buffer);
// Encodings
console.log('UTF-8:', buffer.toString('utf-8'));
console.log('Hex:', buffer.toString('hex'));
console.log('Base64:', buffer.toString('base64'));
// Decode from hex
const hexBuffer = Buffer.from(buffer.toString('hex'), 'hex');
console.log('Decoded from hex:', hexBuffer.toString());
// Allocate buffer
const buf = Buffer.alloc(5);
buf[0] = 65; //A
buf[1] = 66; //B
buf[2] = 67; //C

console.log('Allocated buffer:', buf);
console.log('As string:', buf.toString());
