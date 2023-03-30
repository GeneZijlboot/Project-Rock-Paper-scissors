const playerSelection = "Rock";
function getComputerChoice(){
    Array.prototype.random = function(){
        return this[Math.floor((Math.random()*this.length))];
    }

    //var variables = ["Rock", "Paper", "Scissors"];
    var list = ["Rock","Paper","Scissors"];
    console.log(list.random());
}

getComputerChoice();