var input = require('fs').readFileSync('stdin', 'utf8');

let car1Speed = 60;
let car2Speed = 90;

let distance = (input * 60) / (car2Speed - car1Speed);

console.log(`${distance} minutos`);
