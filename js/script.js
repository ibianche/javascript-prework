let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let computerMove = getMoveName(randomNumber);

// if (randomNumber == '1') {
//   computerMove = 'kamień';
// }
function getMoveName(argMoveId){
if (argMoveId == 2){
  return 'nożyce';
}
}

// else if (randomNumber == '3') {
//   computerMove = 'papier';
// }

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

// if (playerInput == '1') {
//   playerMove = 'kamień';
// }

// else if (playerInput == '2') {
//   playerMove = 'nożyce';
// }

// else if(playerInput == '3') {
//   playerMove = 'papier';
// }

printMessage('Twój ruch to: ' + playerMove);


if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

else if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}

else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}

else if( computerMove == playerMove ){
  printMessage('Remis!');
}

else if( playerMove == 'nieznany ruch'){
  printMessage('Pomyłka!');
}

else {  
  printMessage('Przegrywasz!');
}










