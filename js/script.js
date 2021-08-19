let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = getMoveName(randomNumber);



function getMoveName(argMoveId){

  if (argMoveId == '1'){
    return 'kamień';
  }
  if (argMoveId == '2') {
    return 'nożyce';
  }

  if (argMoveId == '3') {
  return 'papier';
  } 
  // else {
  //   printMessage('Twój ruch to:' + argMoveId );
  //   return 'nieznany ruch';
  // }
}

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


function displayResult(argComputerMove, argPlayerMove) {

if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  }

if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
  }

if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
  }

if( argComputerMove == argPlayerMove ){
  printMessage('Remis!');
  }

if( argPlayerMove == 'nieznany ruch'){
  printMessage('Pomyłka!');
  }

else {  
  printMessage('Przegrywasz!');
  }
}










