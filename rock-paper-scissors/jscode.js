// Random rock-paper-scissors generator
function randomGenerator() {
    
    let condition = [];
    let generatorArray = ["rock", "paper", "scissors"];

    condition = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    console.log(`Generator is ${generatorArray[condition]}`);
}

randomGenerator();

console.log("aba" === "aBa".toLowerCase());