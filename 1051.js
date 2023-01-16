var input = require('fs').readFileSync('stdin', 'utf8');

let salary = Number(input);

let taxes;

if(salary <= 2000) {
    console.log("Isento");
}
else if(salary > 2000 && salary <= 3000) {
    taxes = (salary - 2000) * 0.08;
    console.log(`R$ ${taxes.toFixed(2)}`);
}
else if(salary > 3000 && salary <= 4500) {
    taxes = (salary - 3000) * 0.18 +  (3000 - 2000) * 0.08;
    console.log(`R$ ${taxes.toFixed(2)}`);
}
else {
    taxes = (salary - 4500) * 0.28 + (4500 - 3000) * 0.18 +  (3000 - 2000) * 0.08;
    console.log(`R$ ${taxes.toFixed(2)}`);
}
