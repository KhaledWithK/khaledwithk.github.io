let computer_select = null;

let player_select = null;

let player_winner_count = 0;

let src_paper = "../images/rock-paper-scissors/paper-hand.svg";

let src_rock = "../images/rock-paper-scissors/rock-hand.svg";

let src_scissor = "../images/rock-paper-scissors/scissors-hand.svg";

function sendScore() {
    localStorage.setItem("score", player_winner_count);
}

function toLoginPage() {
    window.location.replace("../login/login.html");
    closePopupOnly();
    sendScore();
}

function closePopupOnly() {
    document.getElementById("back-popup").style.opacity = 0;
}

function openPopup() {
    document.getElementById("option-form").style.opacity = 0;
    document.getElementById("back-popup").style.opacity = 1;
}

function closePopup() {
    document.getElementById("option-form").style.opacity = 1;
    document.getElementById("back-popup").style.opacity = 0;
    /*window.location.replace("../index.html");*/
}

window.onload = function() {
    document.getElementById("counter").innerHTML = player_winner_count;
};

function roulete() {
    let selected = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    let computer_img = document.getElementById("computer-img");
    if (selected == 0) {
        computer_select = "paper";
        computer_img.src = src_paper;
    } else if (selected == 1) {
        computer_select = "scissor";
        computer_img.src = src_scissor;
    } else if (selected == 2) {
        computer_select = "rock";
        computer_img.src = src_rock;
    }
    console.log("cmp." + computer_select);
    finish();
}

function setPlayerSelection() {
    let option = document.getElementById("option-form");
    let number = option.options[option.selectedIndex].value;
    player_select = number;
    player_img = document.getElementById("player-img");
    switch (player_select) {
        case "paper":
            player_img.src = src_paper;
            break;

        case "rock":
            player_img.src = src_rock;
            break;

        case "scissor":
            player_img.src = src_scissor;
            break;
    }
    roulete();
    console.log("pl." + player_select);
}

function finish() {
    if (player_select == "paper" && computer_select == "paper") {
        winner("n/a");
    } else if (player_select == "scissor" && computer_select == "scissor") {
        winner("n/a");
    } else if (player_select == "rock" && computer_select == "rock") {
        winner("n/a");
    } else if (player_select == "paper" && computer_select == "rock") {
        winner("player");
    } else if (player_select == "scissor" && computer_select == "paper") {
        winner("player");
    } else if (player_select == "rock" && computer_select == "scissor") {
        winner("player");
    } else if (computer_select == "paper" && player_select == "rock") {
        winner("computer");
    } else if (computer_select == "scissor" && player_select == "paper") {
        winner("computer");
    } else if (computer_select == "rock" && player_select == "scissor") {
        winner("computer");
    }
}

function winner(winner) {
    let mod_title = document.getElementById("mod-title");
    if (winner == "player") {
        player_winner_count = player_winner_count + 1;
        document.getElementById("counter").innerHTML = player_winner_count;
        mod_title.innerHTML = "You won +1 score";
    } else if (winner == "computer") {
        player_winner_count = 0;
        document.getElementById("counter").innerHTML = player_winner_count;
        mod_title.innerHTML = "You lost ):";
    } else {
        if (winner == "n/a") {
            mod_title.innerHTML = "Its a write";
        }
    }
}