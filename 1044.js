var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let num1 = Number(lines.shift());
let num2 = Number(lines.shift());

function checkMultiples (num1, num2) {
    if (num2 > num1) {
        return num2 % num1 === 0;
    }
    else {
        return num1 % num2 === 0;
    }
}

if(checkMultiples(num1, num2)) {
    console.log("Sao Multiplos")
}
else {
    console.log("Nao sao Multiplos")
}