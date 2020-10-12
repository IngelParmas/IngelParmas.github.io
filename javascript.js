var quotes = [
	'3 4 lasso',
	'Taipohh ju',
	'Tule Mõkusse, arutame seal edasi',
	'SPAAAA',
	'LOLLID LUUAD LOLLID LUUAD LOLLID LUUAD',
	'TUUDRUKUUUUD'
	]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}