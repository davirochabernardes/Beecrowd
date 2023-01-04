var input = require('fs').readFileSync('stdin', 'utf8');


let value = parseFloat(input);

//Notes
let hundreds = Math.trunc(value / 100);
let fifties = Math.trunc((value % 100) / 50);
let twenties = Math.trunc(((value % 100) % 50 ) / 20);
let tens = Math.trunc((((value % 100) % 50 ) % 20) / 10);
let fives = Math.trunc(((((value % 100) % 50 ) % 20) % 10) / 5);
let twos = Math.trunc((((((value % 100) % 50 ) % 20) % 10) % 5) / 2);

//Coins
let coinOfOnes = Math.trunc((((((((value % 100) % 50 ) % 20) % 10) % 5) % 2) + 0.00001) / 1);
let coinOfFifties = Math.trunc(((((((((value % 100) % 50 ) % 20) % 10) % 5) % 2) % 1) + 0.00001) / 0.5);
let coinOfTwentyFives = Math.trunc((((((((((value % 100) % 50 ) % 20) % 10) % 5) % 2) % 1) % 0.5) + 0.00001) / 0.25);
let coinOfTens = Math.trunc(((((((((((value % 100) % 50 ) % 20) % 10) % 5) % 2) % 1) % 0.5) % 0.25) + 0.00001) / 0.10);
let coinOfFives = Math.trunc((((((((((((value % 100) % 50 ) % 20) % 10) % 5) % 2) % 1) % 0.5) % 0.25) % 0.10) + 0.00001) / 0.05);
let coinOfOnesCents= Math.trunc(((((((((((((value % 100) % 50 ) % 20) % 10) % 5) % 2) % 1) % 0.5) % 0.25) % 0.10) % 0.05) + 0.00001) / 0.01);


console.log("NOTAS:");
console.log(hundreds + " nota (s) de R$ 100.00");
console.log(fifties + " nota (s) de R$ 50.00");
console.log(twenties + " nota (s) de R$ 20.00");
console.log(tens + " nota (s) de R$ 10.00");
console.log(fives + " nota (s) de R$ 5.00");
console.log(twos + " nota (s) de R$ 2.00");
console.log("MOEDAS:");
console.log(coinOfOnes + " moeda (s) de R$ 1.00");
console.log(coinOfFifties + " moeda (s) de R$ 0.50");
console.log(coinOfTwentyFives + " moeda (s) de R$ 0.25");
console.log(coinOfTens + " moeda (s) de R$ 0.10");
console.log(coinOfFives + " moeda (s) de R$ 0.05");
console.log(coinOfOnesCents + " moeda (s) de R$ 0.01");