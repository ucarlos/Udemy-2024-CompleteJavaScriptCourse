'use strict';

const Main = {
    firstPlayerElement: null,
    secondPlayerElement: null,
    activePlayerElement: null,
    activePlayerScoreElement: null,
    activePlayerCurrentScoreElement: null,

    getRandomInclusiveInt: function(min, max) {
        if (!((typeof min === "number") && (typeof max === "number")))
            throw new TypeError("Min and Max must be Numbers.");
        else
            return min + Math.floor((Math.random() * (max - min + 1)));
    },

    setActivePlayerScore: function(value) {
        this.activePlayerScoreElement.textContent = `${value}`;
    },

    getActivePlayerScore: function() {
        return (!this.activePlayerScoreElement)? 0: Number(this.activePlayerScoreElement.textContent);
    },

    getActivePlayerCurrentScore: function() {
        return (!this.activePlayerCurrentScoreElement)? 0: Number(this.activePlayerCurrentScoreElement.textContent);
    },

    setActivePlayerCurrentScore: function(value) {
        this.activePlayerCurrentScoreElement.textContent = `${value}`;
    },

    switchActivePlayer: function() {
        // Remove the active class from the active player:
        this.activePlayerElement.classList.remove("player--active");

        if (this.activePlayerElement.classList.contains("player--1"))
            this.activePlayerElement = this.firstPlayerElement;
        else
            this.activePlayerElement = this.secondPlayerElement;

        // Now add the active class to the new active player:
        this.activePlayerElement.classList.add("player--active");

        this.setActivePlayerScoreElements();
    },

    setActivePlayerScoreElements: function() {
        this.activePlayerScoreElement = this.activePlayerElement.querySelector("p.score");
        this.activePlayerCurrentScoreElement = this.activePlayerElement.querySelector("p.current-score");

    },

    clearPlayerScores: function(playerElement) {
        let scoreElement = playerElement.querySelector("p.score");
        let currentScoreElement = playerElement.querySelector("p.current-score");

        scoreElement.textContent = "0";
        currentScoreElement.textContent = "0";
    },

    startNewGame: function() {

    },

    startGame: function() {
        // Now attach all event listeners:
        const diceElement = document.querySelector("img.dice");

        const newButton = document.querySelector(".btn--new");
        const rollButton = document.querySelector(".btn--roll");
        const holdButton = document.querySelector(".btn--hold");

        let firstPlayerElement = document.querySelector("section.player.player--0");
        let secondPlayerElement = document.querySelector("section.player.player--1");

        Main.clearPlayerScores(firstPlayerElement);
        Main.clearPlayerScores(secondPlayerElement);

// Initialize the following object variables:
        Main.firstPlayerElement = firstPlayerElement;
        Main.secondPlayerElement = secondPlayerElement;
        Main.activePlayerElement = firstPlayerElement;
        Main.setActivePlayerScoreElements();


        rollButton.addEventListener("click", function() {
            let playerScore = Main.getActivePlayerScore();
            let currentScore = Main.getActivePlayerCurrentScore();
            diceElement.classList.add("hidden");

            // Generate a random dice roll.
            let randomDiceNumber = Main.getRandomInclusiveInt(1, 6);

            // Display Dice
            diceElement.src = `dice-${randomDiceNumber}.png`;
            diceElement.classList.remove("hidden");

            // Check for rolled 1; If true, switch to the next player.
            if (randomDiceNumber !== 1) {
                currentScore += randomDiceNumber;
                Main.setActivePlayerCurrentScore(currentScore);
            }
            else {
                Main.setActivePlayerCurrentScore(0);
                Main.switchActivePlayer();
                currentScore = 0;
            }
        });

        holdButton.addEventListener("click", function() {
            let playerScore = Main.getActivePlayerScore();
            let currentScore = Main.getActivePlayerCurrentScore();
            diceElement.classList.add("hidden");

            playerScore += currentScore;
            Main.setActivePlayerCurrentScore(0);
            Main.setActivePlayerScore(playerScore);

            if (playerScore >= 100) {
                Main.activePlayerElement.classList.remove("player--active");
                Main.activePlayerElement.classList.add("player--winner");
                let playerName = Main.activePlayerElement.classList.contains("player--1")? "Player 1" : "Player 2";
                window.alert(`${playerName} Wins!`);

                holdButton.disabled = true;
                rollButton.disabled = true;
            }
            else {
                Main.switchActivePlayer();
                currentScore = 0;
                playerScore = Main.getActivePlayerScore();
            }
        });

        newButton.addEventListener("click", function() {
            Main.firstPlayerElement.classList.remove("player--active");
            Main.firstPlayerElement.classList.remove("player--winner");

            Main.secondPlayerElement.classList.remove("player--active");
            Main.secondPlayerElement.classList.remove("player--winner");

            Main.clearPlayerScores(Main.firstPlayerElement);
            Main.clearPlayerScores(Main.secondPlayerElement);

            Main.activePlayerElement = Main.firstPlayerElement;
            Main.setActivePlayerScoreElements();

            Main.activePlayerElement.classList.add("player--active");

            rollButton.disabled = false;
            holdButton.disabled = false;
        });

    }


};


Main.startGame();
