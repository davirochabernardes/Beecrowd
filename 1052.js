var input = require('fs').readFileSync('stdin', 'utf8');

let monthNumber = Number(input);

let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(monthList[monthNumber - 1]);