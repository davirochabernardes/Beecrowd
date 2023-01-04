var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let D = Number(lines.shift());

if((B > C) && (D > A) && ((C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0)) {
    console.log("Valores aceitos");
}
else {
    console.log("Valores nao aceitos");
}