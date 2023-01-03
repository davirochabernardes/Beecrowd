var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());

let p1 = 2;
let p2 = 3;
let p3 = 5;

let media = (A * p1 + B * p2 + C * p3) / (p1 + p2 + p3);

console.log(`MEDIA = ${media.toFixed(1)}`);