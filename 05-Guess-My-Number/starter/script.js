/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 06/03/2024 at 10:16 PM
 *
 * script.js
 *
 * -----------------------------------------------------------------------------
 */

'use strict';

function scratch() {
    /*
        document.querySelector('div.number').textContent = "420";
        document.querySelector('input.guess').value = 69;
        console.log(document.querySelector('p.message'));
    */



}


function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let secretNumber = RandomInt(1, 20);
document.querySelector('div.number').textContent = secretNumber;


const checkClickListener = () => {
    let value = Number(document.querySelector('input.guess').value);
    if (!value) {
        document.querySelector(".message").textContent = "Please enter a number!";
    }
    else {
        console.log(`Guess: ${value}\tType: ${typeof value}\n`);

        if (value === secretNumber)
            document.querySelector(".message").textContent = "Yes, that is correct!";
        else if (value > secretNumber)
            document.querySelector(".message").textContent = "The number is too high!";
        else
            document.querySelector(".message").textContent = "The number is too low!";
    }
};

const repeatGameClickListener = () => {
    secretNumber = RandomInt(1, 20);
    document.querySelector('div.number').textContent = secretNumber;
    document.querySelector('p.message').textContent = 'Start guessing...';
}


document.querySelector('.check').addEventListener('click', checkClickListener);
document.querySelector('button.btn.again').addEventListener('click', repeatGameClickListener);


