alert("Press M, G, I keys on your keyboard to see a magic and turn on your volume!!")


document.addEventListener('keydown', (event) => {
	console.log(event.keyCode);
	var key = event.keyCode;
	if (key == 77) {
		var audio = new Audio("1.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('77').style.backgroundColor = "orange";
		document.getElementById('77').style.boxShadow = "0px 0px 20px 0px orange";
		setTimeout(function() {
			document.getElementById('77').style.backgroundColor = "transparent";
			document.getElementById('77').style.boxShadow = "none";

		},500)
		
	}

	if (key ==71) {
		var audio = new Audio("3.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('71').style.backgroundColor = "blue";
		document.getElementById('71').style.boxShadow = "0px 0px 20px 0px blue";
		setTimeout(function() {
			document.getElementById('71').style.backgroundColor = "transparent";
			document.getElementById('71').style.boxShadow = "none";

		},500)
	}
	if (key == 73) {
		var audio = new Audio("2.mp3");
		audio.currentTime = 0;
		audio.play();
		document.getElementById('73').style.backgroundColor = "green";
		document.getElementById('73').style.boxShadow = "0px 0px 20px 0px green";
		setTimeout(function() {
			document.getElementById('73').style.backgroundColor = "transparent";
			document.getElementById('73').style.boxShadow = "none";

		},500)

	}



});