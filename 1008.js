var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let number = Number(lines.shift());
let workedHours = Number(lines.shift());
let recievedPerWorkedHours = Number(lines.shift());

let salary = workedHours * recievedPerWorkedHours;


console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);