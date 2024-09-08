const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]; 
    return choice;
}

function getHumanChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Choose rock, paper or scissors:");
        if(choice == null){
            continue
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
    
    
    
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "DRAW";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){   return "PLAYER";
    }
    else {
        return "COMPUTER";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "DRAW") {
        return "DRAW BITCH!"
    }
    else if (result == "PLAYER") {
        return `PLAYER GG ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `COMPUTER WINS BITCH! ${computerSelection} beats ${playerSelection}`
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------");
        if(checkWinner(playerSelection, computerSelection) == "PLAYER") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "COMPUTER") {
            scoreComputer++
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer) {
        console.log("PLAYER WON!!!");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("COMPUTER WON YOU BITCH!");
    }
    else {
        console.log ("TIE!");
    }
}

game();