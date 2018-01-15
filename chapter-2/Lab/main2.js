var answer = "";
window.onload= function()
{
document.getElementById('addingButton').addEventListener('click', addNumbers);
};
function addNumbers (e)
{
var answer = "";

{
answer += + document.getElementById('inputOne').value + + document.getElementById('inputTwo').value
}
alert (answer)

document.getElementById('multiplyButton').addEventListener('click', multNumbers);
};
function multNumbers (e)
{
	var answer ="";

{
answer += + document.getElementById('inputThree').value * document.getElementById('inputFour').value
}

alert (answer)

};
