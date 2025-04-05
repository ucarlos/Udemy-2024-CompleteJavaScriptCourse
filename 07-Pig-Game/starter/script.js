'use strict';

const Main = {
    attachEventListeners: function() {

    },
    clearScores: function() {
        let firstPlayerScore = document.querySelector("p#score--0");
        let secondPlayerScore = document.querySelector("p#score--1");
        let diceElement = document.querySelector("img.dice");

        firstPlayerScore.textContent = "0"
        secondPlayerScore.textContent = "0";
        diceElement.classList.add("hidden");

    }

};


// Now attach all event listeners:
Main.attachEventListeners();
Main.clearScores();
