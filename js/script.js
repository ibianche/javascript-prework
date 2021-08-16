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


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove = 'nożyce';
}

if(randomNumber == 3){
  computerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);




if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}
if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrałeś!');
}
if( computerMove == 'kamień, papier, nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Pomyłka!');
}






