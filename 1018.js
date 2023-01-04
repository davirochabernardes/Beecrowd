var input = require('fs').readFileSync('stdin', 'utf8');


let value = parseInt(input)
let hundreds = Math.trunc(value / 100);
let fifties = Math.trunc((value % 100) / 50);
let twenties = Math.trunc(((value % 100) % 50 ) / 20);
let tens = Math.trunc((((value % 100) % 50 ) % 20) / 10);
let fives = Math.trunc(((((value % 100) % 50 ) % 20) % 10) / 5);
let twos = Math.trunc((((((value % 100) % 50 ) % 20) % 10) % 5) / 2);
let ones = Math.trunc((((((value % 100) % 50 ) % 20) % 10) % 5) % 2);


console.log(value);
console.log(hundreds + " nota (s) de R$ 100,00");
console.log(fifties + " nota (s) de R$ 50,00");
console.log(twenties + " nota (s) de R$ 20,00");
console.log(tens + " nota (s) de R$ 10,00");
console.log(fives + " nota (s) de R$ 5,00");
console.log(twos + " nota (s) de R$ 2,00");
console.log(ones + " nota (s) de R$ 1,00");

