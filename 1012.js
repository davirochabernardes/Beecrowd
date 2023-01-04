var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(' ');

const pi = 3.14159;

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);

let triangleArea = (A * C) / 2;
let circleArea = pi * C * C;
let trapeziumArea = (C * (A + B)) / 2;
let squareArea = B * B;
let rectangleArea = A * B;

console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapeziumArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);