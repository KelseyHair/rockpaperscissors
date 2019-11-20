// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
userchoice = $("#userChoice").val();
computerchoice;
$("#shoot").click(function(){
    let random = Math.random(); 
    if(random < .33){
        $("#computerChoice").text("rock");
        computerChoice=("rock");
        
    }
    if(random > .33 && random < .66){
        $("#computerChoice").text("paper");
}
    if (random > .66 && random < .99){
        $("#computerChoice").text("scissors");
    }
    let input = $("#input").val();
    $("#userChoice").text(input);

    if(userchoice = "rock" && computerchoice = "paper"){
    alert("Computer wins!");
    }
    if(userchoice = "paper" && computerchoice = "scissors"){
        alert("Computer wins!");

    }
    if(userchoice = "scissors" && computerchoice = "rock"){
        alert("Computer wins!");

    }
    if(userchoice ="rock" computerchoice = "rock"){
        alert("It's a tie");
    }
    if(userchoice = "rock" && computerchoice = "scissors"){
        alert("You win!");

    }
    if(userchoice = "paper" && computerchoice = "rock"){
        alert("You win!");

    }
    if(userchoice = "scissors" && computerchoice = "paper"){
        alert("You win!");

    }
});
