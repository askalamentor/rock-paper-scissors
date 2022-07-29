// Take user input and compare with generator result
function getInputValueAndCompare() {
    let userInput = document.getElementById("user-input").value;
    console.log(userInput);

    let generatorInput = randomGenerator();
    console.log(generatorInput);


}

// Random rock-paper-scissors generator
function randomGenerator() {
    
    let condition = [];
    let generatorArray = ["rock", "paper", "scissors"];

    condition = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    return generatorArray[condition];
}

