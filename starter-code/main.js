var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];



var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);

    board.appendChild(newCard);
  }

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
