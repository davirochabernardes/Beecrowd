var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let num1 = Number(lines.shift());
let num2 = Number(lines.shift());

let product = num1 * num2;

console.log(`PROD = ${product}`);