var window;
var document;

window.onload = function() {
				document.getElementById("findNameBtn").addEventListener("click", lookForName);
			};

			function lookForName() {

				var myName = "Wali";
				var timesFound = [];
				var text = document.getElementById("inputNameBox").value;

				for (var i = 0; i < text.length; i++) {
					if (text[i] === "W") {
						for (var w = i; w < (myName.length + i); w++) {
							timesFound.push(text[w]);
						}
					}
				}
				if (timesFound.length === 0) {
					alert("Your name wasn't found!");
				} else {
					alert(timesFound);
				}
			}
