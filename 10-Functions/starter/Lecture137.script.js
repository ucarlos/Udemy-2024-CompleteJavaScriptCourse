/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/05/2025 at 06:17 PM
 *
 * Lecture137.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

// SO WHAT ARE FIRST CLASS FUNCTIONS?
// Functions are fist class citizens in which functions are treated as values.
// Essentially, functions are just another "type" of object that can be stored
// in variables or properties.

// We can also pass functions as arguments to other functions such as a parameter
// to a event listener.

// We can also return functions from other functions. Since functions
// are inherited from the Function prototype, we have access to specific
// "functions" for Functions.

// HIGHER-ORDER FUNCTIONS
// In comparison, a higher-order function is a function that receives another
// function as an argument, returns a new function, or both.

// Callback functions will be called by the higher-order function.
// As an example, if we add an event listener to an element like so:
const callbackFunction = () => console.log("Hello World!");
// button.addEventListener("click", callbackFunction);
// `button.addEventListener` is the higher-order function.
// Think of it as a caller function, while `callbackFunction` is the callee
// function (Function that is being called)


// TLDR: First Class functions are simply a feature in which functions are values. It's just a concept
//       Higher Order functions are in practice since the language allows first class functions.


