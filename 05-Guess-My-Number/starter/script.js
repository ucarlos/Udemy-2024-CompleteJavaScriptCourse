/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 06/03/2024 at 10:16 PM
 *
 * script.js
 *
 * -----------------------------------------------------------------------------
 */

'use strict';
// Global variables
const MAX_SCORE_VALUE = 20;
let currentScoreValue = MAX_SCORE_VALUE;
let highScoreValue = 0;
let secretNumber = RandomInt(1, MAX_SCORE_VALUE);

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setScoreMessage(message) {
    document.querySelector("p.message").textContent = message;
}

function decreaseScore() {
    let element = document.querySelector('span.score');
    let newValue = currentScoreValue - 1;

    // We prevent negative scores.
    if (newValue > 0) {
        element.textContent = `${newValue}`;
        currentScoreValue = newValue;
    }
    else {
        window.alert("💥 You lost the game...");
        restartGame();
    }
}

function CompleteTheGameAndSetNewHighScore() {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('div.number').style.width = '30rem';

    if (currentScoreValue > highScoreValue) {
        highScoreValue = currentScoreValue;
        let currentScoreElement = document.querySelector('span.score');
        let highScoreElement = document.querySelector('span.highscore');
        highScoreElement.textContent = currentScoreElement.textContent;
    }
}

function restartGame() {
    document.querySelector('div.number').textContent = '?';
    document.querySelector('input.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('div.number').style.width = '15rem';
    setScoreMessage('Start guessing...');

    secretNumber = RandomInt(1, MAX_SCORE_VALUE);
    currentScoreValue = MAX_SCORE_VALUE;
    document.querySelector('span.score').textContent = currentScoreValue;
}

function main() {
    const repeatGameClickListener = () => { restartGame(); }

    const checkClickListener = () => {
        let value = Number(document.querySelector('input.guess').value);
        if (!value) {
            setScoreMessage("Please enter a number!");
        }
        else if (!(1 <= value && value <= MAX_SCORE_VALUE))
            setScoreMessage(`Please enter a number between 1 and ${MAX_SCORE_VALUE}!`);
        else {
            console.log(`Guess: ${value}\tType: ${typeof value}\n`);

            let numberTextMessage = "";
            if (value === secretNumber) {
                // Display the number:
                numberTextMessage = "Yes, that is correct!";
                document.querySelector('div.number').textContent = secretNumber;
                CompleteTheGameAndSetNewHighScore();
            }
            else {
                numberTextMessage = (value > secretNumber) ? "📈 The number is too high!" : "📉 The number is too low!";
                decreaseScore();
            }
            setScoreMessage(numberTextMessage);
        }
    };

    document.querySelector('.check').addEventListener('click', checkClickListener);
    document.querySelector('button.btn.again').addEventListener('click', repeatGameClickListener);
}

// Now run the program:
main();