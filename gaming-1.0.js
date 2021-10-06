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
    let result = null;
    if(playerSelection == computerSelection) {
        result = TIE;
    }
    else if (playerSelection == ROCK) {
        if(computerSelection == PAPER) {
            result = LOSE;
        }
        else if(computerSelection == SCISSORS) {
            result = WIN;
        }
    }
    else if(playerSelection == PAPER) {
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
    return result;
}
 
function play(humanChoice) {
    let computerChoice = computerPlay();
    let matchResult = playRound(humanChoice, computerChoice);
    outputLog("new round. you (" + humanChoice + "), computer (" + computerChoice + ")");
    if(matchResult < 0) {
        outputLog("computer wins round");
        let score = updateScore('computerScore');
        if (score == 5) {
            outputLog("COMPUTER WINS GAME! game ends ... ");
            document.getElementById('computerScore').style.color = "red";
            endGame();
        }
    }
    else if(matchResult > 0) {
        outputLog("you win round!");
        let score = updateScore('humanScore');
        if (score == 5) {
            outputLog("YOU WIN GAME! game ends ... ");
            document.getElementById('humanScore').style.color = "red";
            endGame();
        }
    }
    else {
        outputLog("you and computer tie!");
    }
}

function updateScore(id) {
    let oldScore = document.getElementById(id).textContent;
    let newScore = parseInt(oldScore) + 1;
    document.getElementById(id).textContent = newScore;
    return newScore
}

function outputLog(text) {
    let oldText = document.getElementById('output').innerText;
    let newText = oldText + '\n' + text;
    document.getElementById('output').innerText = newText;
}

function clickEvent(e) {
    let clickSelection = e.target.innerText;
    play(clickSelection);
}

function endGame() {
    let buttons = document.getElementsByClassName('button-40');
    Array.from(buttons).forEach(element => { element.removeEventListener('click', clickEvent) });
    outputLog('removed event listeners ... ');
}

let buttons = document.getElementsByClassName('button-40');
Array.from(buttons).forEach(element => { element.addEventListener('click', clickEvent) });
outputLog('added event listeners ...');
