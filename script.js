const rounds = 5;
let wonGames = 0;

let playerOption;
let cpuOption;
let options = ["rock", "paper", "scissors"];

function promptPlayerForOption() {
    do {
        option = prompt("Rock, paper or scissors?").toLowerCase();
    } while (!options.includes(option));
    return option;
}

function computerSelectOption() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerOption, cpuOption) {
    if (playerOption == cpuOption)
        return "It's a draw!";

    else if ((playerOption == "rock" && cpuOption == "scissors")
        || (playerOption == "paper" && cpuOption == "rock")
        || (playerOption == "scissors" && cpuOption == "paper")) {
        wonGames++;
        return `You win, ${playerOption} beats ${cpuOption}!`;
    }

    else if ((playerOption == "paper" && cpuOption == "scissors")
        || (playerOption == "rock" && cpuOption == "paper")
        || (playerOption == "scissors" && cpuOption == "rock")) {
        return `You lose, ${cpuOption} beats ${playerOption}!`;
    }
}

function playGame() {
    for (let i = 0; i < rounds; i++) {
        playerOption = promptPlayerForOption();
        cpuOption = computerSelectOption();

        alert(playRound(playerOption, cpuOption));
    }

    alert(`You've won ${wonGames} out of ${rounds} games.`);
}