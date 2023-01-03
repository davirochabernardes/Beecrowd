var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let D = Number(lines.shift());

let difference = (A * B - C * D);

console.log(`DIFERENCA = ${dif}`);