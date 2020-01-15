
let cards = ["queen", "king", "queen","king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen ");

let cardTwo = cards[2];
cardsInPlay.push(cardOne);
console.log('User flipped king');

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[2]) {
    alert("You found a match!")
  } else if (cardsInPlay[0] !== cardsInPlay[4]) {
    alert("Sorry Try Again!")
  } else {
    console.log("nothing");
  }
}

