var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let num1 = Number(lines.shift());
let num2 = Number(lines.shift());
let num3 = Number(lines.shift());

if(num1 < num2 && num1 < num3 && num2 < num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
else if (num1 < num2 && num1 < num3 && num3 < num2) {
    console.log(num1);
    console.log(num3);
    console.log(num2);
}
else if (num2 < num1 && num2 < num3 && num1 < num3) {
    console.log(num2);
    console.log(num1);
    console.log(num3);
}
else if (num2 < num1 && num2 < num3 && num3 < num1) {
    console.log(num2);
    console.log(num3);
    console.log(num1);
}
else if (num3 < num1 && num3 < num2 && num1 < num2) {
    console.log(num3);
    console.log(num1);
    console.log(num2);
}
else if (num3 < num1 && num3 < num2 && num2 < num1) {
    console.log(num3);
    console.log(num2);
    console.log(num1);
}

console.log('');

console.log(num1);
console.log(num2);
console.log(num3);