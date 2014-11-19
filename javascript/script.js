//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

function signIn() {
    var message = alert;
    alert("Thanks for signing in");
    document.getElementById("sign-in");
}

signIn();


//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".

function getUserInput(){
    var userInput = prompt("Please enter your email address");
    if (userInput === null) {
        return;
    }
      document.write("Thanks for signing up, " + userInput);
      document.getElementById('output-here').innerHTML = userInput;
    }

var userInput = ("userInput");


//An extra credit function  that does something...something special.                                         }

var seconds = 60;
function countdown() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    document.getElementById('output-here').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('output-here').innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);