var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let num1 = Number(lines.shift());
let num2 = Number(lines.shift());

let p1 = 3.5;
let p2 = 7.5;

let media = (num1 * p1 + num2 * p2) / (p1 + p2);

console.log(`MEDIA = ${media.toFixed(5)}`);