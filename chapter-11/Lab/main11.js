var window, sentence;

window.onload = function() {
	sentence = "This is a test to check how many vowels are in this sentence.";
};
alert(sentence.match(/[aeiou]/gi).length);

//The lab returns a TypeError in the console. Cannot read property 'match' of undefined. I have not been able to resolve the error.
