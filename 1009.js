var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let name = lines.shift();
let salary = Number(lines.shift());
let totalSold = Number(lines.shift());

let total = salary + totalSold * 0.15;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);