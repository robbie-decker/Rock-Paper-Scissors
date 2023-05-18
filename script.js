let options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

// game();
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

const buttons = document.querySelectorAll('#buttons');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
    });
});

rock.addEventListener('click', ()=> {
    logName();
});

function logName(){
    console.log(this);
}


// Will play a best of 5 game of Rock, Paper, Scissors
function game(){
    while(userScore < 3 && computerScore < 3){
        // Show three options to user: Rock, paper, scissors
        console.log("Please pick rock, paper, or scissors");
        // User selects one of the three
        let userChoice = prompt("Please pick rock, paper, or scissors");
        userChoice = userChoice.toLowerCase();

        // Randomly choose option for computer
        let computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice));
        showScore();
    }
        console.log(userScore >= 3 ? "CONGRATS! YOU BEAT THE COMPUTER" : "Sorry You Lost");
}

function showScore(){
    console.log(`CURRENT SCORE:\nUser: ${userScore}     Computer: ${computerScore}`);
}

// Battle each other and show victor
function playRound(userChoice, computerChoice){
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
