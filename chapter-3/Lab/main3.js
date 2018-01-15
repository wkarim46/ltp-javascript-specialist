var window;
var document;

window.onload = function()
{
	alert("Let's play! Think of a rock, a paper, or scissors");

	document.getElementById('playButton').addEventListener('click', randomNumber);
};
	function randomNumber(e)
{
//	if(computerAnswer <= 0.33) {alert('Computer Chose Rock!')}
//	else if(computerAnswer > 0.33 && computerAnswer <= 0.66) {alert('Computer Chose Paper!')}
//	else {alert('Computer Chose Scissors!')}
//};

				var computerAnswer = Math.random();
				switch(computerAnswer) {
					case "<= 0.33":
						break;
					case "> 0.33 && <= 0.66":
						break;
					case "<= 0.66":
						break;
				}
					{
					if (computerAnswer <= 0.33) {alert("Computer Chose Rock!");}

					else if (computerAnswer > 0.33 && computerAnswer <= 0.66) {alert("Computer Chose Paper!");}

					else if (computerAnswer <= 0.66) {alert("Computer Chose Scissors!");}
					}
}
