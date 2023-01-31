document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },

  // duplicate the cards

  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]

cardArray.sort(() => 0.5 - Math.random()); // sort the cards randomly

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard); // add event listener to each card
      grid.appendChild(card); // add card to grid into the div in html file
    }
  }

  // check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0]; // first card chosen
    const optionTwoId = cardsChosenId[1]; // second card chosen
    if (cardsChosen[0] === cardsChosenId[1]) {
      alert('You found a match :)');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again :(');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length; // display the number of cards won
    if (cardsWon.length === cardArray.length/2) { // if all cards are won
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }


  // flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name); // push the card name into the array
    cardsChosenId.push(cardId); // push the card id into the array
    this.setAttribute('src', cardArray[cardId].img); // set the card image to the card id
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    } // check for match after 2 cards are chosen
  }

  createBoard();
})
