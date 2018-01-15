var window;
var document;


window.onload = function()
{
	document.getElementById('hoursButton').addEventListener("click", runCheckHours);
};
	function runCheckHours () {
	var hoursSlept = document.getElementById('hoursInput').value;

	if (hoursSlept >= 8)
	{
		return alert("You are getting enough sleep!");
	}
	else
	{
		return alert("Try to get more sleep!");
	}
}

