

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

//use switch to figure out who wins when
function playRound(playerSelection, computerSelection) 
{
    if(playerSelection === computerSelection) 
    {
        return "this game is a tie!";
    }

    if(playerSelection === 'rock')
    {
        if(computerSelection == 'paper'){
            return "sorry computer won!";
        }else{
            return "congratulations, you won!";
        }
    }

    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return "sorry, computer won!";
        }else{
            return "congratulations, you won!";
        }
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return "sorry, computer won!";
        }else{
            return "congratulations, you won!";
        }
    }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
