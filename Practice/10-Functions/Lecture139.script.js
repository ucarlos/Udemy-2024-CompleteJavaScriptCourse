/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/07/2025 at 02:01 PM
 *
 * Lecture139.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";


// Example of a function that returns another function (A higher-order function):
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    };
};

// Here's how to call it:
const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

// Here's an alternative way of the above:
greet("Oh Hi")("Mark");

// Alternative function that uses arrow functions (One-liner)
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2("What is up my nigga")("Mark");


