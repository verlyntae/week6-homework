//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".
function signIn() {
	var message = document.getElementById("sign-in");
	alert("Thanks for signing in.");
}

signIn();



//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp() {
	var userInput = prompt("Please enter your email address");
	document.write("Thanks for signing up, " + userInput);
	document.getElementById("output-here").innerHTML= userInput;
}

var userInput = ("userInput");



//An extra credit function that .....

//function extraCredit() {}