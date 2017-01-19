console.log("JS file is connected to HTML! Woo!");

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

//var board = document.getElementById('game-board');


var createBoard = function()
{
	for (var i = 0; i < cards.length; i++)
	{
		var card = document.createElement('div');
		card.setAttribute('class', 'card');
		card.setAttribute('id', 'card');
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards);
		document.getElementById('game-board').appendChild(card);
		
	}
}

function isTwoCards()
{
	this.getAttribute('data-card');
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') == 'queen')
	{
		this.innerHTML = '<img src="queen.png" alt="Queen" />';
	}
	else 
	{
		this.innerHTML = '<img src="king.png" alt="King" />';
	}

	if (cardsInPlay.length === 2)
	{
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards)
{
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else 
		alert("Sorry, try again.");

}

createBoard();