var window;
var document;


window.onload = function() {
	//var name = prompt("What is your name?");
	document.getElementById('confirmButton').addEventListener("click", runConfirm);
	};

	function runConfirm() {
	 var message;
	 if (confirm("Press a button!") == true)
	{
	 message = "You pressed OK!";
	 } else {
	 message = "You pressed Cancel!";
	 }
	document.getElementById("text").innerHTML = message;
}
/*function runConfirm () {
	if (confirm("Press a button!") === true)
	{
		alert(name + " , " + "You Pressed OK!");
	}
	else
	{
		alert(name + " , " + "You Pressed Cancel!");
	}
}*/
