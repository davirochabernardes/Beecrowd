var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let code = lines.shift();
let quantity = lines.shift();
let price;
let total;

switch (code) {
    case "1":
        price = 4.00;
        total = price * quantity;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case "2":
        price = 4.50;
        total = price * quantity;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case "3":
        price = 5.00;
        total = price * quantity;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case "4":
        price = 2.00;
        total = price * quantity;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case "5":
        price = 1.50;
        total = price * quantity;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
}
