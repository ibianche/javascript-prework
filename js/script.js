{
  const getMoveName = function (argMoveId) {

    if (argMoveId == '1') {
      return 'kamień';
    }
    if (argMoveId == '2') {
      return 'papier';
    }

    if (argMoveId == '3') {
      return 'nożyce';
    }

  }
  //
  // function getMoveName(argMoveId) {
  //
  //   if (argMoveId == '1') {
  //     return 'kamień';
  //   }
  //   if (argMoveId == '2') {
  //     return 'papier';
  //   }
  //
  //   if (argMoveId == '3') {
  //     return 'nożyce';
  //   }
  // }


  function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Pomyłka!');
    } else {
      printMessage('Przegrywasz!');
    }
  }

  function playGame(playerInput) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame('1');
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame('2');
  });

  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('3');
  });
}

