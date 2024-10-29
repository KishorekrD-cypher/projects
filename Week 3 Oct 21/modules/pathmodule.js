const path = require('path');

const filePath = '/path/to/file.txt';

console.log('Joined Path:', path.join('directory', 'file.txt'));
console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));