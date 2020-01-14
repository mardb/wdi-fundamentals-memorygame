
let cards = ["queen", "king", "queen","king"];
let cardsInPlay = [];

cardOne = cards[0];
cardTwo = cards[1];
cardsInPlay = cards.push(cardOne, cardTwo);

console.log(cardsInPlay)

if (cards[0] === cards[1]) {
  console.log("You found a match");
} else
if (cards[0] !== cards[1]) {
    alert('Sorry, Try Again!')
}
else {
  console.log('nothing')
  }
