var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let sideA = Number(lines.shift());
let sideB = Number(lines.shift());
let sideC = Number(lines.shift());


function checkTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }
    else {
        return false;
    }
}

if(checkTriangle(sideA, sideB, sideC)) {
    let perimetro = sideA + sideB + sideC;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}
else {
    let area = ((sideA + sideB) * sideC) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}