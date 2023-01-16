var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split("\r\n");

let totalOfPositives = lines.filter(el => el > 0);

console.log(totalOfPositives.length + " valores positivos")
