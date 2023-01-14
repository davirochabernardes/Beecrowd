var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split(" ");

//Sorting the array with bubble sort
function bubbleSort(arr) {
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < (arr.length - i - 1); j++){
            if(Number(arr[j]) < Number(arr[j + 1])) {
                let temp = Number(arr[j]);
                arr[j] = Number(arr[j + 1]);
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let sortedLines = bubbleSort(lines);

let A = Number(sortedLines.shift());
let B = Number(sortedLines.shift());
let C = Number(sortedLines.shift());

if(A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
}
else if(A*A === B*B + C*C) {
    console.log("TRIANGULO RETANGULO");
}
else {
    if(A*A > B*B + C*C) {
        console.log("TRIANGULO OBTUSANGULO");
        if(A === B && A === C){
            console.log("TRIANGULO EQUILATERO");
        }
        else if(A === B || A === C || B === C) {
            console.log("TRIANGULO ISOSCELES");
        }
    }
    else {
        console.log("TRIANGULO ACUTANGULO");
        if(A === B && A === C){
            console.log("TRIANGULO EQUILATERO");
        }
        else if(A === B || A === C || B === C) {
            console.log("TRIANGULO ISOSCELES");
        }
    }
}
