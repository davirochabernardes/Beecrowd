var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");


let startTime = Number(lines.shift());
let endTime = Number(lines.shift());
let lastedTime;

if(endTime > startTime) {
    lastedTime = endTime - startTime;
    console.log(`O JOGO DUROU ${lastedTime} HORA(S)`);
}
else if(endTime < startTime) {
    lastedTime = 24 - (startTime - endTime);
    console.log(`O JOGO DUROU ${lastedTime} HORA(S)`);
}
else {
    console.log(`O JOGO DUROU 24 HORA(S)`);
}
