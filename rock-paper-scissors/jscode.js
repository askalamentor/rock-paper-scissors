// Take user input
function getInputValue() {

    let userInput = document.getElementById("user-input").value;

    return userInput;
}

// Random rock-paper-scissors generator
function randomGenerator() {
    
    let condition = [];
    let generatorArray = ["rock", "paper", "scissors"];

    condition = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    let generatorInput = generatorArray[condition];

    return generatorInput ;
}

// Compare user input and generator result 
function compareResult(userInput, generatorInput) {

    let userScore = 0;
    let generatorScore = 0;

    while ((userScore || generatorScore) < 3) {

        if (userInput.toLowerCase() === generatorInput) {

            continue;

        } else if(userInput.toLowerCase === "rock") {
            
            if (generatorInput === "paper") {
                generatorScore++;
            } else if (generatorInput === "scissors") {
                userScore++;
            }

        } else if (userInput.toLowerCase === "paper") {
    
            if (generatorInput === "rock") {
                userScore++;
            } else if (generatorInput === "scissors") {
                generatorScore++;
            }

        } else if (userInput.toLowerCase === "scissors") {

            if (generatorInput === "paper") {
                userScore++;
            } else if (generatorInput === "rock") {
                generatorScore++;
            }

        }
    }

    let scoreArray = [userScore, generatorScore];

    return scoreArray;
}