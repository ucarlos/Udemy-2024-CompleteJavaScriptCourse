/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 06/03/2024 at 10:16 PM
 *
 * script.js
 *
 * -----------------------------------------------------------------------------
 */

'use strict';
const MAX_SCORE_VALUE = 20;
let currentScoreValue = MAX_SCORE_VALUE;
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let secretNumber = RandomInt(1, 20);


function decreaseScore() {
    let element = document.querySelector('span.score');
    let newValue = currentScoreValue - 1;

    // We prevent negative scores.
    if (newValue > 0) {
        element.textContent = `${newValue}`;
        currentScoreValue = newValue;
    }
    else {
        window.alert("You lost the game :(");
        restartGame();
    }


}

function CompleteTheGameAndSetNewHighScore() {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('div.number').style.width = '30rem';


    let currentScoreElement = document.querySelector('span.score');
    let highScoreElement = document.querySelector('span.highscore');
    highScoreElement.textContent = currentScoreElement.textContent;

}

const checkClickListener = () => {
    let value = Number(document.querySelector('input.guess').value);
    if (!value) {
        document.querySelector(".message").textContent = "Please enter a number!";
    }
    else {
        console.log(`Guess: ${value}\tType: ${typeof value}\n`);

        if (value === secretNumber) {
            // Display the number:
            document.querySelector('div.number').textContent = secretNumber;
            document.querySelector(".message").textContent = "Yes, that is correct!";
            CompleteTheGameAndSetNewHighScore();
        }
        else if (value > secretNumber) {
            document.querySelector(".message").textContent = "The number is too high!";
            decreaseScore();
        }
        else {
            document.querySelector(".message").textContent = "The number is too low!";
            decreaseScore();
        }
    }
};

function restartGame() {
    secretNumber = RandomInt(1, 20);
    document.querySelector('div.number').textContent = '?';
    document.querySelector('input.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('p.message').textContent = 'Start guessing...';
    document.querySelector('div.number').style.width = '15rem';

    currentScoreValue = MAX_SCORE_VALUE;
    document.querySelector('span.score').textContent = currentScoreValue;
}

function main() {
    const repeatGameClickListener = () => { restartGame(); }

    document.querySelector('.check').addEventListener('click', checkClickListener);
    document.querySelector('button.btn.again').addEventListener('click', repeatGameClickListener);
}

// Now run the program:
main();
