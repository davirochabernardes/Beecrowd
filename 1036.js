var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());


function bhaskara (a, b, c) {

    let delta = ((b * b) - (4 * a * c));

    if (a === 0 || delta <= 0) {
        return console.log("Impossivel calcular");
    }
    
    let r1 = (-b + Math.sqrt(delta)) / (2 * a);
    let r2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);

}

bhaskara(A, B, C);






