var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];



var board = document.getElementById('game-board');


function createCards() {
	for(var i=0; i<cards.length; i++) {
		//create element
		var newCard = document.createElement('div');
		//assign class
		newCard.className = 'card';
		//attach it to the board
		document.getElementsByTagName('div')[0].appendChild(newCard);

		newCard.setAttribute('data-card', cards[i]);
		
		// when a card is clicked the function isTwoCards will be executed
		newCard.addEventListener('click', isTwoCards);
	}
};

function isMatch(cards) {
	// body...
	if (card[0]==card[1]) {
		alert("We got a match!")
	} else {
		alert("We are sorry!")
	}
}

function isTwoCards(cards) {
	// body...
	cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
	if (cardsInPlay.length == 2) {

		// if you have two cards in play check for a match
		isMatch(cardsInPlay);

		// clear cards in play array for next try
    	cardsInPlay = [];
	}
}


createCards();





