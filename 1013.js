var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(' ');

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);

function ehOMaior (a, b, c) {
    let maiorAB = (a + b + Math.abs(a - b)) / 2;
    let maiorabC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

    return maiorabC;
}

console.log(`${ehOMaior(A, B, C)} eh o maior`);