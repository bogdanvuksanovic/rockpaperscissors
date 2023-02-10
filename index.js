const playerText = document.getElementById("player-text");
const computerText = document.getElementById("computer-text");
const resultsText = document.getElementById("results-text");
const choiceBtns = document.querySelectorAll(".choice-btn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", function(){
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultsText.textContent = checkWinner();
    console.log("aaa")
    
}));

console.log(choiceBtns)
function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        if(player == "PAPER"){
            return "You lose";
        }
        else{
            return "You won";
        }
    }
    else if(computer == "PAPER"){
        if(player == "SCISSORS") {
            return "You lose";
        }
        else{
            return "You won";
        }
    }
    else if(computer == "SCISSORS"){
        if(player == "ROCK"){
            return "You lose";
        }
        else{
            return "You won";
        }
    }
}
