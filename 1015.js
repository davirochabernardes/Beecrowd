var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

var point1 = lines[0].split(" ");
var point2 = lines[1].split(" ");

var x1 = Number(point1[0]);
var y1 = Number(point1[1]);

var x2 = Number(point2[0]);
var y2 = Number(point2[1]);

let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log(distance.toFixed(4));