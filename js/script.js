function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){

          if (argMoveId == '1'){
            return 'kamień';
          }
          if (argMoveId == '2') {
            return 'papier';
          }

          if (argMoveId == '3') {
          return 'nożyce';
          } 
}


function displayResult(argComputerMove, argPlayerMove) {
          if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
          }
          else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
          }
          else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
          }
          else if( argComputerMove == argPlayerMove ){
            printMessage('Remis!');
          }
          else if( argPlayerMove == 'nieznany ruch'){
            printMessage('Pomyłka!');
          }
          else {  
            printMessage('Przegrywasz!');
          }
}

function playGame(playerInput){
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        let computerMove = getMoveName(randomNumber);
        // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        printMessage('Mój ruch to: ' + computerMove);
        console.log('Gracz wpisał: ' + playerInput);
        let playerMove = getMoveName(playerInput); 

        // if (playerInput == '1') {
        //   playerMove = 'kamień';
        // }

        // else if (playerInput == '2') {
        //   playerMove = 'nożyce';
        // }

        // else if(playerInput == '3') {
        //   playerMove = 'papier';
        // }
        printMessage('Twój ruch to: ' + playerInput);
        displayResult(computerMove, playerInput);

}





document.getElementById('play-rock').addEventListener('click', function(){
  clearMessages();
  playGame('kamień');
});


document.getElementById('play-paper').addEventListener('click', function(){
  clearMessages();
  playGame('papier');
});

document.getElementById('play-scissors').addEventListener('click', function(){
  clearMessages();
  playGame('nożyce');
});


