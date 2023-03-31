

//chose random rock paper or scissors (computer)

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
    case 0:
        return('rock');
    case 1:
        return('paper');
    case 2:
        return('scissors');
    }
}

getComputerChoice();

//use switch to figure out who wins when
function playRound(playerSelection, computerSelection) {
    if((playerSelection == 'rock') &&  (computerSelection == 'rock')){
        return 'Tie!';
    } else if((playerSelection == 'rock') && (computerSelection == 'paper')){
        return 'you lose, paper beats rock';
    }else if((playerSelection == 'rock') && (computerSelection == 'scissors')){
        return 'you win, scissors beats rock';
    }
}


const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));