var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let x = Number(lines.shift());
let y = Number(lines.shift());


if (x === 0 && y === 0) {
    console.log("Origem");
}
else if (x === 0 && y !== 0) {
    console.log("Eixo Y");
}
else if (x !== 0 && y === 0) {
    console.log("Eixo X");
}
else if (x > 0 && y > 0) {
    console.log("Q1");
}
else if (x > 0 && y < 0) {
    console.log("Q4");
}
else if (x < 0 && y > 0) {
    console.log("Q2");
}
else if (x < 0 && y < 0) {
    console.log("Q3");
}
