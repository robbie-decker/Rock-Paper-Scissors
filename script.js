let options = ["fire", "water", "grass"];
let userScore = 0;
let computerScore = 0;



const userScoreboard = document.getElementById("userScoreboard");
const computerScoreboard = document.getElementById("computerScoreboard");
const roundResult = document.getElementById("roundResult");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const pokeball = document.getElementById("pokeball_Static");


const buttons = document.querySelectorAll('#buttons');
buttons.forEach((button) => {
    button.addEventListener('click',  async e => {
        // User selects one of the three buttons
        let userChoice = e.target.id;

        // Check if user has already won
        if(userScore >= 3 || computerScore >= 3){
            userScore >= 3 ? alert("You already won! Press reset to play again") : alert("You already lost. Press reset to play again") ;
            return;
        }

        // Randomly choose option for computer
        let computerChoice = getComputerChoice();
        message = playRound(userChoice, computerChoice);
        computerChoiceDisplay.parentElement.classList.remove("hidden")
        computerChoiceDisplay.textContent = computerChoice.toUpperCase();
        setColor(computerChoice);

        roundResult.textContent = message["battle"] + message["result"];
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
    computerChoiceDisplay.parentElement.classList.add("hidden")
    roundResult.textContent = "";
    computerChoiceDisplay.textContent = "";
});

reset.addEventListener("mouseenter", () =>{
    pokeball.style.opacity = 0;
})

reset.addEventListener("mouseleave", () =>{
    pokeball.style.opacity = 100;
})


async function updateScore(){
    userScoreboard.textContent = `User: ${userScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
    return;
}

function endGame(){
    userScore >= 3 ? roundResult.textContent = message["battle"] + "YOU WON THE SERIES" : roundResult.textContent = message["battle"] + "You lost the series :(";
    
}

function setColor(computerChoice){
    computerChoice === "fire" ? computerChoiceDisplay.style.color = "red" : computerChoice === "water" ? computerChoiceDisplay.style.color = "blue" : computerChoiceDisplay.style.color = "green";
}

// Battle each other and show victor
function playRound(userChoice, computerChoice){
    let message = ""
    if(computerChoice === userChoice){
        return message = {"battle" : `${userChoice} hits ${computerChoice}: `, "result": "Draw"};
    }
    else if(userChoice === "fire"){
        if(computerChoice === "grass"){
            userScore++;
            return message = {"battle": "fire beats grass: ", "result" : "You Won!"};
        }
        else if(computerChoice ==="water"){
            computerScore++;
            return message = {"battle" : "fire loses to water: ", "result" : "You Lost :/"};
        }
    }

    else if(userChoice === "water"){
        if(computerChoice === "fire"){
            userScore++;
            return message = {"battle": "water beats fire: ", "result" : "You Won!"};
        }
        else if(computerChoice ==="grass"){
            computerScore++;
            return message = {"battle" : "water loses to grass: " , "result" : "You Lost :/"};
        }
    }

    else if(userChoice === "grass"){
        if(computerChoice === "water"){
            userScore++;
            return message = {"battle": "grass beats water: ", "result" : "You Won!"};
        }
        else if(computerChoice ==="fire"){
            computerScore++;
            return message = {"battle" : "grass loses to fire: ", "result" : "You Lost :/"};
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
