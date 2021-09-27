const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const WIN = 1;
const LOSE = -1;
const TIE = 0;

function computerPlay() {
    let outcomes = [ROCK, PAPER, SCISSORS];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerLowered = playerSelection.toLowerCase();
    if(!(["rock", "paper", "scissors"].includes(playerLowered))) {
        console.log("error: invalid player input: " + playerSelectionLowered);
        return;
    }
    let result = null;
    let playerFormatted = playerLowered.charAt(0).toUpperCase() + playerLowered.substring(1, playerLowered.length);
    //console.log("pF: " + playerFormatted + ", cS: " + computerSelection); 
    if(playerFormatted == computerSelection) {
        result = TIE;
    }
    else if (playerFormatted == ROCK) {
        if(computerSelection == PAPER) {
            result = LOSE;
        }
        else if(computerSelection == SCISSORS) {
            result = WIN;
        }
    }
    else if(playerFormatted == PAPER) {
        if(computerSelection == ROCK) {
            result = WIN;
        }
        else if(computerSelection == SCISSORS) {
            result = LOSE;
        }
    } 
    else { // player must be scissors
        if(computerSelection == ROCK) {
            result = LOSE;
        }
        else if(computerSelection == PAPER) {
            result = WIN;
        }
    }
    console.log("you: " + playerFormatted + ", computer: " + computerSelection + ", result: " + result);
    return result;
}
 
function game() {
    result = window.prompt("enter rock, paper, or scissors: ");
    console.log("playing five rounds ...");
    let yourWins = 0;
    let compWins = 0;
    for(let i=0; i<5; i++) {
        let matchResult = playRound(result, computerPlay());
        if(matchResult < 0) {
            compWins++;
        }
        else if(matchResult > 0) {
            yourWins++;
        }
    }
    console.log("your wins: " + yourWins + ", comp wins: " + compWins);
    if(yourWins > compWins) {
        console.log("you win!");
    }
    else if(compWins > yourWins) {
        console.log("you lose!");
    }
    else {
        console.log("you tied!");
    }
}

game();