// make css
//
// add end game options


    const buttons = document.querySelectorAll("#userRPS > button");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", () => {
            let userInput = buttons[i].id;
            let generatorInput = randomGenerator();
            let scoreArray = compareResult(userInput, generatorInput);
    
            console.log(userInput);
            console.log(generatorInput);
            console.log(scoreArray);
    
            if (scoreArray[0] === 1) 
            {
                userScoreCounter();
            } 
            else if (scoreArray[1] === 1) 
            {
                generatorScoreCounter();
            }
        });

    }


// Random rock-paper-scissors generator
function randomGenerator() {
    
    let condition = [];
    let generatorArray = ["rock", "paper", "scissors"];

    condition = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    let generatorInput = generatorArray[condition];

    return generatorInput;
}

// Compare user input and generator result 
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
}

function generatorScoreCounter() {
    let generatorScore = document.getElementById("generatorScore").innerText;
    generatorScore = parseInt(generatorScore);
    generatorScore++;
    document.getElementById("generatorScore").innerText = generatorScore;
}


