//Jack Krejci Yahtzee JS File

//Variable to sum up the dice and a variable for a counter for what round the user is on
var sumDice = 0;
var round = 0;
var count = 0;

//Have the dice roll when the window is loaded
window.onload = function RollDice() {

    //Let 5 dice roll at the beginning of the page being loaded
    dice1 = Math.floor(Math.random()*6) + 1;
    dice2 = Math.floor(Math.random()*6) + 1;
    dice3 = Math.floor(Math.random()*6) + 1;
    dice4 = Math.floor(Math.random()*6) + 1;
    dice5 = Math.floor(Math.random()*6) + 1;

    document.getElementById("dice1").value = dice1;
    document.getElementById("dice2").value = dice2;
    document.getElementById("dice3").value = dice3;
    document.getElementById("dice4").value = dice4;
    document.getElementById("dice5").value = dice5;
};

//Function for yes or no button
function decisionYes() {

    //Reset everything if the user wants to play again
    round = 0;
    sumDice = 0;
    document.getElementById("score").value = "";
    count = 0;

    //Get rid of other text
    document.getElementById("yesbutton").style.visibility = "hidden";
    document.getElementById("nobutton").style.visibility = "hidden";
    document.getElementById("result").innerHTML = null;
    document.getElementById("again").innerHTML = null;
    document.getElementById("dice1").value = null;
    document.getElementById("dice2").value = null;
    document.getElementById("dice3").value = null;
    document.getElementById("dice4").value = null;
    document.getElementById("dice5").value = null;
    document.getElementById("score").value = null;

}

function decisionNo() {
    //Say so long to the user
    //Get rid of other text
    document.getElementById("yesbutton").style.visibility = "hidden";
    document.getElementById("nobutton").style.visibility = "hidden";
    document.getElementById("result").innerHTML = null;
    document.getElementById("again").innerHTML = null;
    document.getElementById("dice1").value = null;
    document.getElementById("dice2").value = null;
    document.getElementById("dice3").value = null;
    document.getElementById("dice4").value = null;
    document.getElementById("dice5").value = null;
    document.getElementById("score").value = null;

    //Let the user startup again if they want to
    document.getElementById("restart").style.visibility = "visible";
    document.getElementById("replaytxt").style.visibility = "visible";
}

//Give user the option to play again even if they quit
function decisionPlay() {
    //Reset everything if the user wants to play again
    round = 0;
    sumDice = 0;
    count = 0;

    //Rehide the button
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("replaytxt").style.visibility = "hidden";


}
function RollDice() {
    //Count the round we're on
    round += 1;

    if (count < 3) {
        //If the round is not at 3 yet do below
        count += 1;
        if (round < 3) {
            //Let 5 dice roll 
            dice1 = Math.floor(Math.random()*6) + 1;
            dice2 = Math.floor(Math.random()*6) + 1;
            dice3 = Math.floor(Math.random()*6) + 1;
            dice4 = Math.floor(Math.random()*6) + 1;
            dice5 = Math.floor(Math.random()*6) + 1;

            sumDice += dice1 + dice2 + dice3 + dice4 + dice5;

            document.getElementById("dice1").value = dice1;
            document.getElementById("dice2").value = dice2;
            document.getElementById("dice3").value = dice3;
            document.getElementById("dice4").value = dice4;
            document.getElementById("dice5").value = dice5;

            document.getElementById("score").value = sumDice;
        } else {
            //Now that we've gotten to roll three rounds, show the results
            //Let 5 dice roll 
            dice1 = Math.floor(Math.random()*6) + 1;
            dice2 = Math.floor(Math.random()*6) + 1;
            dice3 = Math.floor(Math.random()*6) + 1;
            dice4 = Math.floor(Math.random()*6) + 1;
            dice5 = Math.floor(Math.random()*6) + 1;

            sumDice += dice1 + dice2 + dice3 + dice4 + dice5;

            document.getElementById("dice1").value = dice1;
            document.getElementById("dice2").value = dice2;
            document.getElementById("dice3").value = dice3;
            document.getElementById("dice4").value = dice4;
            document.getElementById("dice5").value = dice5;

            document.getElementById("score").value = sumDice;

            //Reset the game and show results (This is when the user wins)
            if (sumDice > 50) {
                document.getElementById("result").innerHTML = "YOU WON! <br>";

                //Ask if the user would like to play again
                document.getElementById("again").innerHTML = "Play again?";
                
                document.getElementById("yesbutton").style.visibility = "visible";
                document.getElementById("nobutton").style.visibility = "visible";


            } else {
                document.getElementById("result").innerHTML = "YOU LOST! <br>";

                //Ask the user if they'd like to play again
                document.getElementById("again").innerHTML = "Play again?";
                document.getElementById("yesbutton").style.visibility = "visible";
                document.getElementById("nobutton").style.visibility = "visible";

            }
        }
    }
    
 
}



