var window, document, navigator;

window.onload = function() {
	document.getElementById('getLocationBtn').addEventListener('click', grabLocation);
};
function grabLocation() {
	navigator.geolocation.getCurrentPosition(showGoogleLink, error);
}
function showGoogleLink(position) {
	document.getElementById('mapsLink').innerHTML = "<a href=https://www.google.com/maps/@" + position.coords.latitude + ',' + position.coords.longitude + ">CLICK ME!</a>";
}
function error(){
	alert('Error. Location Not Found.');
}
