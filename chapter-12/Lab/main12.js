var document;
function purpleWords() {
	var boldWords=document.getElementsByTagName('strong');
		for (var i=0; i<boldWords.length; i++) {
			boldWords[i].style.color='purple';
			boldWords[i].style.backgroundColor='lightblue';
	}
}
function returnColor() {
	var boldWords = document.getElementsByTagName('strong');
		for (var i=0; i<boldWords.length; i++) {
			boldWords[i].style.color='black';
			boldWords[i].style.backgroundColor='';
	}
}
