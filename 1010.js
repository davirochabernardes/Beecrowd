var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\r\n');

let product1 = lines.shift().split(" ");
let product2 = lines.shift().split(" ");

let totalProduct1 = product1[1] * product1[2];
let totalProduct2 = product2[1] * product2[2];
let total = totalProduct1 + totalProduct2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)