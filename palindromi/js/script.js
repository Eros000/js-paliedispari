const userWord = prompt('inserisci una parola palindroma'); 

console.log(userWord, typeof userWord);



let word = userWord;
let letter;
let reverseWord = '';

let i = word.length - 1;

while (i >= 0) {
  letter = word[i];
  reverseWord += letter;
  console.log(letter);
  i--;
}

console.log(reverseWord);

if(word == reverseWord){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }



  if(word == reverseWord){
    alert('Corretto!')
}
else{
    alert('Sbagliato!')
}