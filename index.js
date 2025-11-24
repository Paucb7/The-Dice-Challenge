

function rollDice() {
    
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;

    if (randomNumber1 === 6) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice(5).png");
    } else if (randomNumber1 === 5) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice(4).png")
    } else if (randomNumber1 === 4) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice(3).png");
    } else if (randomNumber1 === 3) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice(2).png");
    } else if (randomNumber1 === 2) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice(1).png");
    } else if (randomNumber1 === 1) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice.png");
    } else {
        console.log('Error on player 1 dice');
    }

    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;

    if (randomNumber2 === 6) {
        var diceImg2 = document.querySelector("img.diceP2");
        diceImg2.setAttribute("src", "img/dice(5).png");
    } else if (randomNumber2 === 5) {
        var diceImg2 = document.querySelector("img.diceP2");
        diceImg2.setAttribute("src", "img/dice(4).png");
    } else if (randomNumber2 === 4) {
        var diceImg2 = document.querySelector("img.diceP2");
        diceImg2.setAttribute("src", "img/dice(3).png");
    } else if (randomNumber2 === 3) {
        var diceImg2 = document.querySelector("img.diceP2");
        diceImg2.setAttribute("src", "img/dice(2).png");
    } else if (randomNumber2 === 2) {
        var diceImg2 = document.querySelector("img.diceP2");
        diceImg2.setAttribute("src", "img/dice(1).png");
    } else if (randomNumber2 === 1) {
        var diceImg2 = document.querySelector("img.diceP2");
        diceImg2.setAttribute("src", "img/dice.png");
    } else {
        console.log('Error on player 2 dice');
    }


    if (randomNumber1 === randomNumber2) {
        var ganadorTexto = document.querySelector("h1");
        ganadorTexto.innerHTML = 'Draw! 🎭';
    } else if (randomNumber1 < randomNumber2) {
        var ganadorTexto = document.querySelector("h1");
        ganadorTexto.innerHTML = 'Player 2 Wins! 🚩';
    } else if (randomNumber1 > randomNumber2) {
        var ganadorTexto = document.querySelector("h1");
        ganadorTexto.innerHTML = '🚩 Player 1 Wins';
    }


}

 
