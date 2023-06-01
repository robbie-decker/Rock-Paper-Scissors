let options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;


// game();

const userScoreboard = document.getElementById("userScoreboard");
const computerScoreboard = document.getElementById("computerScoreboard");
const winCard = document.getElementById("winCard");
const loseCard = document.getElementById("loseCard");
const roundResult = document.getElementById("roundResult");

const buttons = document.querySelectorAll('#buttons');
buttons.forEach((button) => {
    button.addEventListener('click',  async e => {
        // User selects one of the three buttons
        let userChoice = e.target.id;
        console.log(e);

        // Check if user has already won
        if(userScore >= 3 || computerScore >= 3){
            userScore >= 3 ? alert("You already won! Press reset to play again") : alert("You already lost. Press reset to play again") ;
            return;
        }

        // Randomly choose option for computer
        let computerChoice = getComputerChoice();
        message = playRound(userChoice, computerChoice);
        roundResult.textContent = message;
        // I really want this to work before alerting the user
        await updateScore();
        if(userScore >= 3 || computerScore >= 3){
            endGame();
        }
    });
});

const reset = document.getElementById("reset")
reset.addEventListener('click', () =>{
    userScore = 0;
    computerScore = 0;
    updateScore();
    winCard.style.display = "none";
    loseCard.style.display = "none" ;
    roundResult.textContent = "";
});


async function updateScore(){
    userScoreboard.textContent = `User: ${userScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
    return;
}

function endGame(){
    userScore >= 3 ? winCard.style.display = "block" : loseCard.style.display = "block" ;
    
}

// Battle each other and show victor
function playRound(userChoice, computerChoice){
    console.log(`user chose: ${userChoice}      computer chose: ${computerChoice}`);
    let message = ""
    if(computerChoice === userChoice){
        return message = "It is a draw";
    }
    else if(userChoice === "rock"){
        if(computerChoice === "scissors"){
            userScore++;
            return message = "rock beats scissors\nYOU WON";
        }
        else if(computerChoice ==="paper"){
            computerScore++;
            return message = "rock loses to paper\nYOU LOST :(";
        }
    }

    else if(userChoice === "paper"){
        if(computerChoice === "rock"){
            userScore++;
            return message = "paper beats rock\nYOU WON";
        }
        else if(computerChoice ==="scissors"){
            computerScore++;
            return message = "paper loses to scissors\nYOU LOST :(";
        }
    }

    else if(userChoice === "scissors"){
        if(computerChoice === "pape"){
            userScore++;
            return message = "scissors beats paper\nYOU WON";
        }
        else if(computerChoice ==="rock"){
            computerScore++;
            return message = "scissors loses to rock\nYOU LOST :(";
        }
    }
}

// Randomly get the computer choice
function getComputerChoice(){
    let randomNumber = generateRandomInteger(3);
    return options[randomNumber];
}


// Generate a number between 0 and max, including max
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
