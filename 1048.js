var input = require('fs').readFileSync('stdin', 'utf8');

var salary = Number(input);
let adjustmentRate, adjustment, newSalary;

if(salary > 2000) {
    adjustmentRate = 0.04;
}
else if(salary > 1200) {
    adjustmentRate = 0.07;
}
else if(salary > 800) {
    adjustmentRate = 0.10;
}
else if(salary > 400) {
    adjustmentRate = 0.12;
}
else {
    adjustmentRate = 0.15;
}

adjustment = salary * adjustmentRate;
newSalary = salary + adjustment;

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${adjustment.toFixed(2)}`);
console.log(`Em percentual: ${(adjustmentRate*100).toFixed(0)} %`);