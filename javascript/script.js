//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".
function signIn() {
	var message1 = "Thanks for signing in.";
	alert(message1);
}

<button onclick="signIn();">sign-in</button>



//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function signUp() {
	var userInput = prompt("Please enter your email address");
	document.write("Thanks for signing up, ");
	document.getElementById("output-here").innerHTML=userInput;
}


<button onclick="getUserInput();">sign-up</button>