const options = ["Rock", "Paper", "Scissors"];



function getComputerChoice() {

    const choice = options[Math.floor(Math.random () * options.length)];
    return choice;

}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false){
      const choice = prompt("Rock, paper or scissors?");
      if (choice == null){
        continue;
      }

    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
    }
}

}


function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie"; 
    }
//conditions to win
    else if (

    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")

    ){
    return "Player";
    } 

    //computer wins
    else {
        return "computer";
    }

    
}


function playRound (playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "it's a tie!"


    }

    else if (result == "Player") { 
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

    else { 
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
}


function game(){
    console.log("Welcome!")
    for (let i=0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game()