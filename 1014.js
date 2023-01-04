var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let totalDistance = Number(lines.shift());
let totalFuel = Number(lines.shift());

let consumption = totalDistance / totalFuel;

console.log(`${consumption.toFixed(3)} km/l`)