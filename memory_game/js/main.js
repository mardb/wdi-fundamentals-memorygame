
let cards = [
  {
   
    rank: "queen" , 
    suit: "hearts",
    cardImage:"images/queen-of-hearts.png"
  },
   {
  
    rank:  "queen", 
    suit: "diamonds",
    cardImage:"images/queen-of-diamonds.png"
  },
   {
    
    rank: "king", 
    suit: "hearts",
    cardImage:"images/king-of-hearts.png"
  },
   {
 
    rank: "king", 
    suit: "diamonds",
    cardImage:"images/king-of-diamonds.png"
  },
];
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
 
  console.log("User flipped " + cards[cardId].rank);

  cardsInPlay.push(cards[cardId].rank);
  
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);




// Delete the four strings from the cards array.
// In the cards array, create four objects, one for each card.
// HINT: Here's the syntax for creating an array that contains objects:

// const myArray = [
// {
// color: 'red',
// flower: 'rose',
// petals: 20
// },
// {
// color: 'blue',
// flower: 'violet',
// petals: 6
// }
// ];
// Here are the values each object should hold:
// rank	suit	cardImage