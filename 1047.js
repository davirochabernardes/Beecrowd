var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

let startHour = Number(lines.shift());
let startMinute = Number(lines.shift());
let endHour = Number(lines.shift());
let endMinute = Number(lines.shift());
let lastedHour, lastedMinute;

if(startHour === endHour) {
    if (endMinute > startMinute) {
        lastedMinute = endMinute - startMinute;
        lastedHour = endHour - startHour;
    }
    else if (endMinute === startMinute) {
        lastedMinute = 0;
        lastedHour = 24;
    }
    else {
        lastedMinute = (endMinute + 60) - startMinute;
        lastedHour = 24 - (startHour - (endHour - 1));
    }
}

else if(startHour < endHour) {
    if(endMinute >= startMinute) {
        lastedMinute = endMinute - startMinute;
        lastedHour = endHour - startHour;
    }
    else {
        lastedMinute = (endMinute + 60) - startMinute;
        lastedHour = (endHour - 1) - startHour;
    }
}

else {
    if(endMinute >= startMinute) {
        lastedMinute = endMinute - startMinute;
        lastedHour = 24 - (startHour - endHour);
    }
    else {
        lastedMinute = (endMinute + 60) - startMinute;
        lastedHour = 24 - (startHour - (endHour - 1));
    }
}


console.log(`O JOGO DUROU ${lastedHour} HORA(S) E ${lastedMinute} MINUTO(S)`);
