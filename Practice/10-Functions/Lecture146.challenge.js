/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 07:07 PM
 *
 * Lecture146.challenge.js
 * This is more of a thinking challenge than a coding challenge 🤓
 * Your tasks:
 * 1. Take the IIFE below and at the end of the function, attach an event
 *    listener that changes the color of the selected h1 element ('header') to
 *    blue, each time the body element is clicked. Do not select the h1 element
 *    again!
 *
 * 2. And now explain to yourself (or someone around you) why this worked!
 *    Take all the time you need. Think about when exactly the callback
 *    function is executed, and what that means for the variables involved in
 *    this example.
 * -----------------------------------------------------------------------------
 */

"use strict";

(function () {
    const headerElement = document.querySelector('h1');
    headerElement.style.color = 'red';
    headerElement.addEventListener("click", function() {
        headerElement.style.color = 'blue';        
    });
})();

// I believe that the above works as follows:
// Once the Immediately Invoked Function Expression is executed, a closure is immediately created
// since we are referring to the `headerElement` inside the function passed to the addEventListener
// call that is added to the `headerElement`. Since we're using referring to the `header` element
// object every time we click on the it, we have to have the variable stored in the call stack/heap.

// It also helps that I've done so many times before but didn't have a name for it. I just saw it as
// something I was able to do since I didn't want to redefine variables again.
