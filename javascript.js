var quotes = [
	'3 4 lasso',
	'Taipohh ju',
	'Tule Mõkusse, arutame seal edasi',
	'SPAAAA',
	'LOLLID LUUAD LOLLID LUUAD LOLLID LUUAD',
	'TUUDRUKUUUUD',
	'MadaMada'
	]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function move() {
      let start = Date.now();
      document.getElementById("britt").style.visibility = visible;

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
	  
        document.getElementById("britt").style.left = (-900) + timePassed / 5 + 'px';
	
        if (timePassed > 4000) clearInterval(timer);

      }, 20);
    }
