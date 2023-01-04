var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split("\r\n");

let notes = lines.shift();
let arrayOfNotes = notes.split(" ");
let note1 = Number(arrayOfNotes.shift());
let note2 = Number(arrayOfNotes.shift());
let note3 = Number(arrayOfNotes.shift());
let note4 = Number(arrayOfNotes.shift());

let weight1 = 2;
let weight2 = 3;
let weight3 = 4;
let weight4 = 1;


let media = ((note1 * weight1) + (note2 * weight2) + (note3 * weight3) + (note4 * weight4)) / (weight1 + weight2 + weight3 + weight4);

console.log(`Media: ${media.toFixed(1)}`);
if(media < 5) {
    console.log("Aluno reprovado.");
}
else if (media >= 5 && media <= 6.9 ) {
    console.log("Aluno em exame.")
    let exam = Number(lines.shift());
    let newMedia = (media + exam) / 2;
    console.log(`Nota do exame: ${exam.toFixed(1)}`);
    if(newMedia >= 5) {
        console.log("Aluno aprovado.");
    }
    else {
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${newMedia.toFixed(1)}`);
}
else {
    console.log("Aluno aprovado.");
}




