var input = require('fs').readFileSync('stdin', 'utf8');

const pi = 3.14159;

let volumeOfSphere = (4.0/3) * pi * input**3;

console.log(`VOLUME = ${volumeOfSphere.toFixed(3)}`);