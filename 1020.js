var input = require('fs').readFileSync('stdin', 'utf8');

let inputDays = parseInt(input);

let years = Math.trunc(inputDays / 365);
let months = Math.trunc((inputDays % 365) / 30);
let days = Math.trunc((inputDays % 365) % 30);

console.log(years + " ano (s)");
console.log(months + " mes (es)");
console.log(days + " dia (s)");