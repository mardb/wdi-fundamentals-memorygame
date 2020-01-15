
let cards = ["queen", "queen", "king","king"];
let cardsInPlay = [];

function checkForMatch() {
   if (cardsInPlay.length === 2) {
     if (cardsInPlay[0] === cardsInPlay[1]) {
       alert("You found a match!");
     } else if (cardsInPlay[0] !== cardsInPlay[4]) {
       alert("Sorry Try Again!");
     } else {
       console.log("nothing");
     }
   }
}

function flipCard(cardId) {

  checkForMatch();
 
  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(2);

