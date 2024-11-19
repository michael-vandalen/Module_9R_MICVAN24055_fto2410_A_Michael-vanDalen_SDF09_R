// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 6;
let secondCard = 9;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard + 6;

if (sum <= 20) {
  message = "Do you want to draw a new card? 😊";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

// Cash Out!
console.log(message);
