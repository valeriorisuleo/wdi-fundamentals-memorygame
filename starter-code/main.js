var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "King";
var cardFour = "King";

/*var compare = function(cardTwo, cardFour) {
	if (cardOne === cardTwo) {
		alert("We got a match!")
	} else {
		alert("We are sorry!")
	}
};*/

/*
1) Open your index.html and look for your <div> with a class of board. 
We need to give this div an ID so that we may get it using JavaScript.

2) Give your div an id of game-board.*/
document.getElementsByTagName('div')[0].setAttribute('id', 'game-board');

/*
5) Get an element with the ID of game-board and set it to a variable.
*/
var gameboard = document.getElementById('game-board');

/*
6) Assuming your memory card game consists of four cards, CREATE a 
for LOOP that creates an HTML element for each card. 
Each HTML element should be a DIV, as well as the CLASS card 
(This will help when you add css).
*/

//Questa è la sintassi di un LOOP per creare un qualsiasi elemento (div,li...):

function createCards() {
	for(var i=0; i<4; i++) {
		//create element
		var newCard = document.createElement('div');
		//assign class
		newCard.className = 'card';
		//attach it to the document
		document.getElementsByTagName('div')[0].appendChild(newCard);
	}
};

createCards();