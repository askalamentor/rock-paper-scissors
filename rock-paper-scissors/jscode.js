
    const buttons = document.querySelectorAll("#userRPS > button");
    const generatorButtons = document.querySelectorAll("#computerRPS > img");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", () => {

            resetButtonsStyle(generatorButtons, buttons);

            let userInput = buttons[i].id;
            userButtonStyle(userInput);
            let generatorInput = randomGenerator();
            generatorButtonStyle(generatorInput, generatorButtons);
            let scoreArray = compareResult(userInput, generatorInput);
    
            console.log(userInput);
            console.log(generatorInput);
            console.log(scoreArray);
    
            if (scoreArray[0] === 1) 
            {
                let userScore = userScoreCounter();

                // check if user score is 5 to end game
                if (userScore === 5) {
                    document.querySelector("#win-lose-text").innerText = "You win :)";
                    document.querySelector("#main-container").style.filter = "blur(15px)";
                    document.querySelector("#modal").style.zIndex = "100";
                    document.querySelector("#main-container").style.pointerEvents = "none";                
                }
            } 
            else if (scoreArray[1] === 1) 
            {
                let generatorScore = generatorScoreCounter();

                // check if computer score is 5 to end game
                if (generatorScore === 5) {
                    document.querySelector("#win-lose-text").innerText = "You lost :(";
                    document.querySelector("#main-container").style.filter = "blur(15px)";
                    document.querySelector("#modal").style.zIndex = "100";
                    document.querySelector("#main-container").style.pointerEvents = "none";               
                }
            }

            // End game - check if user clicks yes or no condition
            document.querySelector("#modal-submit").addEventListener("click", () => {
                resetGame();
            });

            document.querySelector("#modal-endgame").addEventListener("click", () => {
                window.location.href = "quitPage.html";
            });
        });      
    }

    // if user want to go back to the game at the quit page
    document.querySelector("returnGameButton").addEventListener("click", () => {
        window.location.href = "index.html";
    });

// rock-paper-scissors generator
function randomGenerator() {
    
    let condition = [];
    let generatorArray = ["rock", "paper", "scissors"];

    condition = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    let generatorInput = generatorArray[condition];

    return generatorInput;
}

function compareResult(userInput, generatorInput) {

    let userScore = 0;
    let generatorScore = 0;

        if (userInput.toLowerCase() === generatorInput) {
            
        } else if(userInput.toLowerCase() === "rock") {
            
            if (generatorInput === "paper") {
                generatorScore++;
            } else if (generatorInput === "scissors") {
                userScore++;
            }

        } else if (userInput.toLowerCase() === "paper") {
    
            if (generatorInput === "rock") {
                userScore++;
            } else if (generatorInput === "scissors") {
                generatorScore++;
            }

        } else if (userInput.toLowerCase() === "scissors") {

            if (generatorInput === "paper") {
                userScore++;
            } else if (generatorInput === "rock") {
                generatorScore++;
            }

        }

        let scoreArray = [userScore, generatorScore];

        return scoreArray;
}

function userScoreCounter() {
    let userScore = document.getElementById("userScore").innerText;
    userScore = parseInt(userScore);
    userScore++;
    document.getElementById("userScore").innerText = userScore;
    return userScore;
}

function generatorScoreCounter() {
    let generatorScore = document.getElementById("generatorScore").innerText;
    generatorScore = parseInt(generatorScore);
    generatorScore++;
    document.getElementById("generatorScore").innerText = generatorScore;
    return generatorScore;
}

// user and generator button style function are called after user choice.
function userButtonStyle(userInput) {
    document.getElementById(userInput).firstChild.style.transform= "translateY(-5px)";
    document.getElementById(userInput).firstChild.style.border = "2px solid rgb(212, 212, 55)";
}
function generatorButtonStyle(generatorInput, generatorButtons) {

    if (generatorInput === "rock") {
        document.getElementById(generatorButtons[0].id).style.transform = "translateY(-5px)";
        document.getElementById(generatorButtons[0].id).style.border = "2px solid rgb(212, 212, 55)";
    } else if (generatorInput === "paper") {
        document.getElementById(generatorButtons[1].id).style.transform = "translateY(-5px)";
        document.getElementById(generatorButtons[1].id).style.border = "2px solid rgb(212, 212, 55)";
    } else if (generatorInput === "scissors") {
        document.getElementById(generatorButtons[2].id).style.transform = "translateY(-5px)";
        document.getElementById(generatorButtons[2].id).style.border = "2px solid rgb(212, 212, 55)";
    }

}

// The function calls immediately after clicking.
function resetButtonsStyle(generatorButtons, buttons) {

    for (let i = 0; i < generatorButtons.length; i++) {
        document.getElementById(generatorButtons[i].id).style.transform = "translateY(0px)";
        document.getElementById(generatorButtons[i].id).style.border = "2px solid #555";
        document.getElementById(buttons[i].id).firstChild.style.transform = "translateY(0px)";
        document.getElementById(buttons[i].id).firstChild.style.border = "2px solid #555";
    }

}

function resetGame() {
    document.querySelector("#userScore").innerText = "0";
    document.querySelector("#generatorScore").innerText = "0";
    document.querySelector("#main-container").style.filter = "blur(0px)";
    document.querySelector("#modal").style.zIndex = "-100";
    document.querySelector("#end-game").style.zIndex = "-200";
    document.querySelector("#main-container").style.pointerEvents = "initial";    
}




