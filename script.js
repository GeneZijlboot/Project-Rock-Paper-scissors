let userScore = 0;
let computerScore = 0;
const userScore_par = document.getElementById("PlayerScore");
const computerScore_par = document.getElementById("ComputerScore");
const scoreBoard = document.querySelector("Score");
const text_result = document.getElementById("text");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");

//random computer choice 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win(userChoice, computerChoice)
{
    userScore++;
    userScore_par.innerHTML = userScore;
    computerScore_par.innerHTML = computerScore;
    text_result.innerHTML = userChoice + " beats " + computerChoice + ". you win!";
}

function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_par.innerHTML = userScore;
    computerScore_par.innerHTML = computerScore;
    text_result.innerHTML = userChoice + " loses to " + computerChoice + ". you win!";
}

function draw(userChoice, computerChoice)
{
    userScore_par.innerHTML = userScore;
    computerScore_par.innerHTML = computerScore;
    text_result.innerHTML = userChoice + " and " + computerChoice + ". its a tie!"; 
}

//userchoice --> result of pressing the buttons
function game(userChoice) { 
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice,  computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,  computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

//clicking the buttons 
function main(){
    rock_button.addEventListener('click', function() {
        game("rock");

    })
    
    paper_button.addEventListener('click', function() {
        game("paper");
    })
    
    scissors_button.addEventListener('click', function() {
        game("scissors");
    })
}

function disable(){
    if (userScore === 5){
        rock_button.disable = true;
        paper.disable = true;
        scissors_button.disable = true;
        text_result.innerHTML = "you won the Game O/"; 
    } else if (computerScore === 5){
        rock_button.disable = true;
        paper.disable = true;
        scissors_button.disable = true;
        text_result.innerHTML = "you lost the Game O/"; 
    }
}

disable();
main();