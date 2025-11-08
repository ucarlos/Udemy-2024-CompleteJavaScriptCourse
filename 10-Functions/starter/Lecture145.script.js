/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 06:48 PM
 *
 * Lecture145.script.js
 * Another Closure example
 * -----------------------------------------------------------------------------
 */

"use strict";

// We don't need to define a function that returns another function in order to get a closure:

let f;

const g = function() {
    const a  = 23;
    f = function() {
        console.log(a * 2);
    };
};

g();
// The 'a' variable is inside the backpack (closure) of the 'f' function.
f();

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    };
};

// 'f' will defined once more, which is a different function from the f defined in the 'g' function.
h();
f();

console.dir(f);

// If you attempt to call the 'g' function again and then call 'f', you'll get the same value as before.
g();
f();
console.dir(f);

// Here's another example involving a timer - You don't need to return a function to get a closure.
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    // In this case, setTimeout serves as an example of a closure, which includes the local variables used here.
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000);
    
    console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassengers(180, 3);

// The closure has priority over the scope chain, as seen below:
const perGroup = 1000;
boardPassengers(180, 3);
// If this wasn't the case, this `perGroup` variable would be used instead of in the `boardPassengers(180, 3)` call.
