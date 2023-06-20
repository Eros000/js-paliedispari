const userChoice = prompt('scegli pari o dispari');

console.log('userChoice', userChoice, typeof userChoice);

const userNumber = parseInt(prompt('scegli un numero da 1 a 5'));

console.log('userNumber', userNumber, typeof userNumber);




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let computerNumber = getRndInteger(1, 5);

console.log('computerNumber', computerNumber, typeof computerNumber)



const summ = userNumber + computerNumber

console.log('summ', summ, typeof summ)