const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultIcon = document.getElementById("result-icon");
const resultRounds = document.getElementById("result-rounds");
const playerWins = document.getElementById("player-wins");
const botWins = document.getElementById("bot-wins");
const popUp = document.getElementById("popup");
const popUpResult = document.getElementById("popup-result");

let playerSelection = "";
const options = ["pedra", "papel", "tesoura"];
let randomInt = () => Math.floor(Math.random() * 3);
let randomOpt = () => options[randomInt()];
let player_wins = 0
let bot_wins = 0

let wins = () => {
    if (botWins.innerHTML == "5") {
        resultIcon.innerHTML = "";
        resultRounds.innerHTML = "";
        popUpResult.innerHTML = "The bot won 5 rounds!"
        popUp.dataset.visible = "visible";
        rock.dataset.visible = "hidden";
        paper.dataset.visible = "hidden";
        scissors.dataset.visible = "hidden";
    } else if (playerWins.innerHTML == "5") {
        resultIcon.innerHTML = "";
        resultRounds.innerHTML = "";
        popUpResult.innerHTML = "You won 5 rounds!"
        popUp.dataset.visible = "visible";
        rock.dataset.visible = "hidden";
        paper.dataset.visible = "hidden";
        scissors.dataset.visible = "hidden";
    }
}


rock.addEventListener("click", () => {
    let computerSelection = randomOpt();
    playerSelection = "pedra";
    if (computerSelection == 'pedra') {
        resultIcon.innerHTML = "✊";
        resultRounds.innerHTML = "TIE";
    } else if (computerSelection == 'papel') {
        resultIcon.innerHTML = "✋";
        resultRounds.innerHTML = "BOT WON"
        bot_wins++;
        botWins.innerHTML = bot_wins;
    } else {
        resultIcon.innerHTML = "✌️";
        resultRounds.innerHTML = "YOU WON"
        player_wins++;
        playerWins.innerHTML = player_wins;
    }

    wins();
});
paper.addEventListener("click", () => {
    let computerSelection = randomOpt();
    playerSelection = "papel";
    if (computerSelection == 'pedra') {
        resultIcon.innerHTML = "✊";
        resultRounds.innerHTML = "YOU WON";
        player_wins++;
        playerWins.innerHTML = player_wins;
    } else if (computerSelection == 'papel') {
        resultIcon.innerHTML = "✋";
        resultRounds.innerHTML = "TIE";
    } else {
        resultIcon.innerHTML = "✌️";
        resultRounds.innerHTML = "BOT WON";
        bot_wins++;
        botWins.innerHTML = bot_wins;
    }

    wins();
});
scissors.addEventListener("click", () => {
    let computerSelection = randomOpt();
    playerSelection = "tesoura";
    if (computerSelection == "pedra") {
        resultIcon.innerHTML = "✊";
        resultRounds.innerHTML = "BOT WON";
        bot_wins++;
        botWins.innerHTML = bot_wins;
    } else if (computerSelection == "papel") {
        resultIcon.innerHTML = "✋";
        resultRounds.innerHTML = "YOU WON";
        player_wins++;
        playerWins.innerHTML = player_wins;
    } else {
        resultIcon.innerHTML = "✌️";
        resultRounds.innerHTML = "TIE";
    }

    wins();
});

popUp.addEventListener("click", () => {
    popUp.dataset.visible = "hidden";
    rock.dataset.visible = "visible";
    paper.dataset.visible = "visible";
    scissors.dataset.visible = "visible";
    player_wins = 0;
    bot_wins = 0;
    playerWins.innerHTML = player_wins;
    botWins.innerHTML = bot_wins;
});

