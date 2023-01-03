var input = require('fs').readFileSync('stdin', 'utf8');

const pi = 3.14159;

let area = pi * input*input;

console.log(`A=${area.toFixed(4)}`);

