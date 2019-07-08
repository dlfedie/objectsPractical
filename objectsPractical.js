let card0 = {
  suit: 'Hearts',
  number: 2
} //end card0

let card1 = {
  suit: 'Spades',
  number: 1
} //end card1

let card2 = {
  suit: 'Diamonds',
  number: 1
} //end card1


function isRed(cardToCheck) {
  console.log('In isRed:', cardToCheck);
  if (cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds') {
    console.log('yup, is red');
    return true;
  } //end red
  else {
    console.log('nope, not red');
    return false;
  } //end !red
} //end isRed

console.log(isRed(card0));
console.log(isRed(card1));
console.log(isRed(card2));

//write a function that receives 2 cards, returns the higher one

function isHigher(firstCard, secondCard) {
  console.log('In isHigher:', firstCard, secondCard);
  if (firstCard.number > secondCard.number) {
    console.log(firstCard, 'is the higher card');
    return firstCard;
  } // first higher
  else if (firstCard.number < secondCard.number) {
    console.log(secondCard, 'is the higher card');
    return secondCard;
  } // second higher
  else {
    console.log('Both cards have the same number!', firstCard, secondCard);
    return firstCard;
  } // equal
} //end isHigher

console.log(isHigher(card0, card2));
console.log(isHigher(card2, card0));
console.log(isHigher(card1, card2));