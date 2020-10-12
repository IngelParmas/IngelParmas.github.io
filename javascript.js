var quotes = [
	'3 4 LASSO',
	'Taipohh ju',
	'Lähme Mökusse',
	'SPAAAAAA',
	'LOLLID LUUAD',
	'TUUDRUKUUUUD',
	'MadaMada',
	'KenaKena'
	]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function move() {
      let start = Date.now();
      document.getElementById("quoteDisplay").style.visibility = "hidden";
      document.getElementById("speech").style.visibility = "hidden";
      document.getElementById("britt").style.visibility = "visible";

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
	  
        document.getElementById("britt").style.left = (-900) + timePassed / 5 + 'px';
	
        if (timePassed > 5000) {
		clearInterval(timer);
		document.getElementById("quoteDisplay").style.visibility = "visible";
                document.getElementById("speech").style.visibility = "visible";
	}

      }, 20);
    }
