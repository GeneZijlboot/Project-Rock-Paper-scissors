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
    if(userScore < 5){
        userScore++;
        userScore_par.innerHTML = userScore;
        computerScore_par.innerHTML = computerScore;
        text_result.innerHTML = userChoice + " beats " + computerChoice + ". you win!";
    } else if(userScore === 5){
        text_result.innerHTML = "You Win!";
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissors_button.disabled = true;
    }
}

function lose(userChoice, computerChoice)
{
    if(computerScore < 5){
        computerScore++;
        userScore_par.innerHTML = userScore;
        computerScore_par.innerHTML = computerScore;
        text_result.innerHTML = userChoice + " loses to " + computerChoice + ". you lose!";
    } else if (computerScore === 5){
        text_result.innerHTML = "You Lost, the computer wins!";
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissors_button.disabled = true;
    }
}

function draw(userChoice, computerChoice)
{
    if(computerScore < 5 && userScore < 5){
        userScore_par.innerHTML = userScore;
        computerScore_par.innerHTML = computerScore;
        text_result.innerHTML = userChoice + " and " + computerChoice + ". its a tie!";
    } else if(computerChoice === 5 && userScore === 5){
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissors_button.disabled = true;
    }
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

main();