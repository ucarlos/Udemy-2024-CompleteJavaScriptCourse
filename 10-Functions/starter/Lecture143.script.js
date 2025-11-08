/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 05:46 PM
 *
 * Lecture143.script.js
 * Immediately Invoked Function Expressions (IIFE)
 * -----------------------------------------------------------------------------
 */

"use strict";

// Obviously, we can access this function from anywhere:
function doSomething() {
    console.log("Look Mom, I'm doing something!");
}

doSomething();

// However, if we need to create a function that is immediately invoked and never used again,
// We have to wrap it around parentheses like so:
(function() {
    console.log("This function will never run again.");
    
})();

// The above is an example of something called IIFE (Immediately Invoked Function Expressions)
// Here's another example as an arrow function:
(() => console.log("This will ALSO never run again."))();

// These IIFE follow the same scoping rules as curly braces, but this isn't used as much as
// a curly brace scope like so:
{
    const example = 12;
    function thing() {
        console.log("Whatever");
    }
    thing();
}

// This obviously doesn't exist here.
// thing();

