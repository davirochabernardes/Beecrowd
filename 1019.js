var input = require('fs').readFileSync('stdin', 'utf8');

let inputSeconds = parseInt(input);

let hours = Math.trunc(inputSeconds / 3600);
let minutes = Math.trunc((inputSeconds / 60) % 60);
let seconds = Math.trunc(inputSeconds  % 60);

console.log(hours + ":" + minutes + ":" + seconds)