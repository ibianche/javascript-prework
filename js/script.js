let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove = 'nożyce';
}

if(randomNumber == 3){
  computerMove = 'papier';
}

printMessage('Mój ruch to: ' + computerMove);
