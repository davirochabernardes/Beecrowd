var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split("\r\n");

let class1 = lines.shift();
let class2 = lines.shift();
let class3 = lines.shift();

if(class1 === 'vertebrado') {
    if(class2 === 'ave'){
        if(class3 === 'carnivoro') {
            console.log('aguia');
        }
        else if(class3 === 'onivoro') {
            console.log('pomba');
        }
    }
    else if(class2 === 'mamifero') {
        if(class3 === 'onivoro') {
            console.log('homem');
        }
        else if(class3 === 'herbivoro') {
            console.log('vaca');
        }
    }
}
else if(class1 === 'invertebrado') {
    if(class2 === 'inseto'){
        if(class3 === 'hematofago') {
            console.log('pulga');
        }
        else if(class3 === 'herbivoro') {
            console.log('lagarta');
        }
    }
    else if(class2 === 'anelideo') {
        if(class3 === 'hematofago') {
            console.log('sanguessuga');
        }
        else if(class3 === 'onivoro') {
            console.log('minhoca');
        }
    }
}