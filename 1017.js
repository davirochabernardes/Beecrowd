var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let consumption = 12;

let spentTime = Number(lines.shift());
let averageSpeed = Number(lines.shift());

let spentFuel = (spentTime * averageSpeed) / consumption;

console.log(spentFuel.toFixed(3));