/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 06/03/2024 at 10:16 PM
 *
 * script.js
 *
 * -----------------------------------------------------------------------------
 */

'use strict';

let currentScoreValue = 20;
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let secretNumber = RandomInt(1, 20);
document.querySelector('div.number').textContent = secretNumber;


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
        // Now reload the game.
        location.reload();
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


function main() {
    const repeatGameClickListener = () => {
        secretNumber = RandomInt(1, 20);
        document.querySelector('div.number').textContent = secretNumber;
        document.querySelector('p.message').textContent = 'Start guessing...';
    }

    document.querySelector('.check').addEventListener('click', checkClickListener);
    document.querySelector('button.btn.again').addEventListener('click', repeatGameClickListener);
}

// Now run the program:
main();
