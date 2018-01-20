var window, document, renderText, XMLHttpRequest;

window.onload = function() {
	document.getElementById('httpButton').addEventListener('click', renderText);
		var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange=function renderText() {
		document.getElementById('demo').innerHTML=xhttp.responseText;
	};
		xhttp.open("GET", "text13.txt", true);
		xhttp.send();
};
