function rollDices() {
  var firstRoll = Math.floor(Math.random() * (6 - 1) + 1);
  var secondRoll = Math.floor(Math.random() * (6 - 1) + 1);

  console.log(firstRoll);
  console.log(secondRoll);

  document.getElementById("dice1").src = "images/dice" + firstRoll + ".png";
  document.getElementById("dice2").src = "images/dice" + secondRoll + ".png";

  var winnerMsg;
  if (firstRoll > secondRoll) {
    winnerMsg = "🚩 Player 1 Wins!";
  } else if (secondRoll > firstRoll) {
    winnerMsg = "Player 2 Wins! 🚩";
  } else {
    winnerMsg = "Draw!";
  }

  document.getElementById("headermsg").innerText = winnerMsg;
}
