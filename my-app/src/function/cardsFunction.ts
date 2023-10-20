export function initializeCardDeck() {
  let cardDeck: boolean[][] = [];
  for (let i = 0; i < 4; i++) {
    cardDeck[i] = [];
    for (let j = 0; j < 13; j++) {
      cardDeck[i].push(false);
    }
  }
  localStorage.setItem("cardDeck", JSON.stringify(cardDeck));
  console.log(cardDeck);
}

export function getRandomCard(min: number = 1, max: number = 13): number[] {
  let cardDeck = JSON.parse(localStorage.getItem("cardDeck") || "[]");
  let randomColor: number;
  let randomCardNumber: number;
  if (
    //If array is full put [0,0], need tu shuffle the cards
    cardDeck[0].indexOf(false) === -1 &&
    cardDeck[1].indexOf(false) === -1 &&
    cardDeck[2].indexOf(false) === -1 &&
    cardDeck[3].indexOf(false) === -1
  ) {
    console.log("CES LA FINNNNNNNNNNNNNNNNNNNNn");
    randomColor = 0;
    randomCardNumber = 0;
  } else {
    do {
      randomColor = Math.floor(Math.random() * 4) + 1;
      randomCardNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(cardDeck[randomColor - 1][randomCardNumber - 1]);
      console.log(cardDeck[0].indexOf(false));
      console.log(cardDeck[1].indexOf(false));
      console.log(cardDeck[2].indexOf(false));
      console.log(cardDeck[3].indexOf(false));
    } while (
      cardDeck[randomColor - 1][randomCardNumber - 1] && // Random value while the selected value is true (card allready taken)
      (cardDeck[0].indexOf(false) !== -1 || //Continue untill the whole array is full
        cardDeck[1].indexOf(false) !== -1 ||
        cardDeck[2].indexOf(false) !== -1 ||
        cardDeck[3].indexOf(false) !== -1)
    );
    cardDeck[randomColor - 1][randomCardNumber - 1] = true;
  }
  localStorage.setItem("cardDeck", JSON.stringify(cardDeck));

  console.log(cardDeck);
  return [randomColor, randomCardNumber];
}
