//Rock, paper and scissors game. 5 rounds. The Odin Project.



let computerCount = 0;
let playerCount = 0;

game();
game();
game();
game();
game();



function game() {

    function getPlayerChoice() {
        
    const playerInput = prompt (`Choose either Rock, Paper or Scissors`);
    let pSFormatted = playerInput.toLowerCase();
    let frontLetter = pSFormatted.slice(0,1).toUpperCase();
    let wordLength = pSFormatted.slice(1, );
    let playersChoice = `${frontLetter}${wordLength}`;
    console.log(playersChoice);
    return playersChoice

};

getPlayerChoice;



function getComputerChoice() {
    
    const choices = ['Rock', 'Paper', 'Scissors'];
    
    let random = Math.floor(Math.random() * 3);
    let computersChoice = choices.at(random);
    console.log(computersChoice);
    return computersChoice;
    
};

getComputerChoice;



function playRound(){
    
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === `Paper`) {
        computerCount++;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Rock" && computerSelection === `Scissors`) {
        playerCount++;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Scissors`) {
        computerCount++;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Paper" && computerSelection === `Rock`) {
        playerCount++;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Rock`) {
        computerCount++;
        return `You loose. Computers ${computerSelection} beats your ${playerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    } else if (playerSelection === "Scissors" && computerSelection === `Paper`) {
        playerCount++;
        return `You Win. Your ${playerSelection} beats computers ${computerSelection}. Scores are, You ${playerCount} and computer ${computerCount}.`;
    }  else if (playerSelection != 'Rock' || playerSelection != "Paper" || playerSelection != "Scissors") {
        return `Your choice is outside the scope of this game. Please choose Rock, Paper or Scissors`;
    }

};

console.log(playRound());


}



function announceWinner (){
    
    if (computerCount < playerCount){
        return `Congratulations! You Win! ${playerCount} to ${computerCount}.`;
    } else if (computerCount > playerCount){
        return `Computer wins. ${computerCount} to ${playerCount}. Better luck next time.`;
    } else if (computerCount === playerCount){
        return`It's a tie. ${playerCount} to ${computerCount}. Play agian.`;
    }

};

console.log(announceWinner());
