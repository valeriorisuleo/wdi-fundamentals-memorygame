console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "King";
var cardFour = "King";
var areBothEven = function(cardTwo, cardFour) {
	if (cardTwo % 2 === 0 && cardFour === 0) {
		alert("you find a match");
	}
	else{
		alert("Sorry");
	}
};