let playerScore = 0
let compScore = 0
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerScoreDiv = document.querySelector(".player-score")
const compScoreDiv= document.querySelector(".comp-score")



const computerPlay = () => {
    const arrOfChoices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, computerSelection) => {

    
    if (playerSelection === "rock" && computerSelection === "rock") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "You tied! You both picked Rock"
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "You tied! You both picked Scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        p.innerText = "You tied! You both picked Paper"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        compScore++
        p.innerText = "You lose! Paper beats Rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        compScore++
        p.innerText = "You lose! Scissors beats Paper"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        compScore++
        p.innerText = "You lose! Rock beats Scissors"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        playerScore++
        p.innerText = "You win! Rock beats Scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        playerScore++
        p.innerText = "You Win! Paper beats Rock"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        const p = document.createElement("p")
        outcomeDiv.appendChild(p)
        playerScore++
        p.innerText = "You Win! Scissors beats Paper"
    }
}


const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 3) {
        const h2 = document.createElement("h2")
        h2.classList.add("win")
        h2.innerText = `You won! ${playerScore} to ${compScore} ! You're not a noob!`
        outcomeDiv.appendChild(h2)
    }
    if (compScore === 3) {
        const h2 = document.createElement("h2")
        h2.classList.add("lose")
        h2.innerText = `You lose! ${playerScore} to ${compScore} ! You're a noob!`
        outcomeDiv.appendChild(h2)
    }

}


const scoreBoard = (playerScoreDiv, compScoreDiv) =>{
    playerScoreDiv.innerText = `player score: ${playerScore}`
    compScoreDiv.innerText = `computer score: ${compScore}`
}

rockButton.addEventListener("click", () => {
    const computerSelection = computerPlay()
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
    scoreBoard(playerScoreDiv, compScoreDiv)
})

paperButton.addEventListener("click", () => {
    const computerSelection = computerPlay()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
    scoreBoard(playerScoreDiv, compScoreDiv)
})


scissorsButton.addEventListener("click", () => {
    const computerSelection = computerPlay()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
    scoreBoard(playerScoreDiv, compScoreDiv)
})

